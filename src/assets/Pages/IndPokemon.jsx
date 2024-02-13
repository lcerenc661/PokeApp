import axios from "axios";
import { getSpeciesNames, getBaseStats, getAbilities } from "../../utils";
import { redirect, useLoaderData } from "react-router-dom";
import {
  DescriptionChart,
  StatsChart,
  PokemonImage,
  PokemonTitle,

} from "../Components";

export const loader = async ({ params }) => {
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
  const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
  const { id } = params;

  try {
    const response = await axios.get(`${pokeURL}${id}`);
    console.log(response.data);
    const { stats, sprites, abilities, name, height, weight, types } =
      response.data;
    const responseSpecies = await axios.get(`${speciesURL}${id}`);
    const responseEvolution = await axios.get(
      responseSpecies.data.evolution_chain.url
    );

    const evolution = responseEvolution.data.chain;
    let evolutionLine = new Object();
    evolutionLine = getSpeciesNames(evolution, 0, evolutionLine);

    const abilitiesReduced = getAbilities(abilities);
    const statsReduced = getBaseStats(stats);

    const imgFront = sprites.other["official-artwork"].front_default;
    const imgShiny = sprites.other["official-artwork"].front_shiny;
    const imgShowdown = sprites.other["showdown"].front_default;

    return {
      imgFront,
      imgShiny,
      imgShowdown,
      statsReduced,
      evolutionLine,
      abilitiesReduced,
      name,
      id,
      height,
      weight,
      types,
    };
  } catch (error) {
    console.log(error);
    return redirect("pokemons");
  }
};

const IndPokemon = () => {
  const { id } = useLoaderData();
  console.log(id < 200);


  return (
    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 xl:px-32 lg:px-16 md:px-8 md:my-24  my-12 relative">
      <PokemonImage />
      <PokemonTitle />
      <DescriptionChart />
      <StatsChart />
    </div>
  );
};
export default IndPokemon;
