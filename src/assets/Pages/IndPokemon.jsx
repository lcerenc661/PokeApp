import axios from "axios";
import { getSpeciesNames, getBaseStats, getAbilities } from "../../utils";
import { useLoaderData, redirect } from "react-router-dom";
import { DescriptionChart, StatsChart, Title } from "../Components";

export const loader = async ({ params }) => {
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
  const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
  const { id } = params;

  try {
    const response = await axios.get(`${pokeURL}${id}`);
    const { stats, sprites, abilities, name, height, weight, types } = response.data;
    const responseSpecies = await axios.get(`${speciesURL}${id}`);
    const responseEvolution = await axios.get(
      responseSpecies.data.evolution_chain.url
    );

    const evolution = responseEvolution.data.chain;
    let evolutionLine = new Object();
    evolutionLine = getSpeciesNames(evolution, 0, evolutionLine);
    
    const abilitiesReduced = getAbilities(abilities)
    console.log(types)
    const statsReduced = getBaseStats(stats)
    return {sprites, statsReduced, evolutionLine, abilitiesReduced, name};
  } catch (error) {
    console.log(error);
    return redirect("/pokemons");
  }
};

const IndPokemon = () => {
  const {sprites, statsReduced, evolutionLine} = useLoaderData();
  // console.log(evolutionLine)
  const imgFront = sprites.other['official-artwork'].front_default;
  const imgFemale = sprites.other['official-artwork'].front_shiny;
  const imgShowdown = sprites.other['showdown'].front_default;
  return <div>
    <Title />
    <DescriptionChart />
    <StatsChart />
    </div>;
};
export default IndPokemon;
