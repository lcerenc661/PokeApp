import { useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonContainer = () => {
  const pokemonsList = useLoaderData();

  return (
    <div className="flex flex-wrap gap-10 p-10  items-center content-center justify-center transition ease-in-out delay-150 ">
      {pokemonsList.map((pokemon) => {
        const { name, sprites, types, id } = pokemon;
        return (
          <PokemonCard
            key={id}
            name={name}
            id={id}
            img={sprites.front_default}
            types={types}
          />
        );
      })}
    </div>
  );
};
export default PokemonContainer;
