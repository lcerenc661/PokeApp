import axios from "axios";
import { useEffect } from "react";
import {
  getSpeciesNames,
  getBaseStats,
  getAbilities,
  fetchEvolutionLine,
} from "../../utils";
import { redirect, useLoaderData } from "react-router-dom";
import {
  DescriptionChart,
  StatsChart,
  PokemonImage,
  PokemonTitle,
  PokemonEvolution,
} from "../Components";

const singlePokemonQuery = (pokeURL, id) => {
  return {
    queryKey: ["singlePokemon", id, pokeURL],
    queryFn: () => axios.get(`${pokeURL}${id}`),
  };
};

const evolutionQuery = (evolutionLine, id) => {
  return {
    queryKey: ["evolutionPokemon", id],
    queryFn: () => fetchEvolutionLine(evolutionLine),
  };
};

const evolutionListQuery = (url) => {
  return {
    queryKey: ["evolutionListPokemon", url],
    queryFn: () => axios.get(url),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
    const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
    const { id } = params;

    try {
      const response = await queryClient.ensureQueryData(
        singlePokemonQuery(pokeURL, id)
      );
      console.log(response.data);
      const { stats, sprites, abilities, name, height, weight, types } =
        response.data;
      const responseSpecies = await queryClient.ensureQueryData(
        singlePokemonQuery(speciesURL, id)
      );
      const responseEvolution = await queryClient.ensureQueryData(
        evolutionListQuery(responseSpecies.data.evolution_chain.url)
      );
      // const responseEvolution = await axios.get(
      //   responseSpecies.data.evolution_chain.url
      // );

      const evolution = responseEvolution.data.chain;
      let evolutionLine = new Object();
      evolutionLine = getSpeciesNames(evolution, 0, evolutionLine);
      const evolutionInfo = await await queryClient.ensureQueryData(
        evolutionQuery(evolutionLine, id)
      );
      // const evolutionInfo = await fetchEvolutionLine(evolutionLine);

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
        evolutionInfo,
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
  const { id, evolutionLine } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 xl:px-32 lg:px-16 md:px-8 md:my-24  my-12 relative">
      <PokemonImage />
      <PokemonTitle />
      <DescriptionChart />
      <StatsChart />
      {evolutionLine && <PokemonEvolution />}
    </div>
  );
};
export default IndPokemon;
