import { useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Paginator from "./Paginator";

const PokemonContainer = () => {
  const { pokemonsList } = useLoaderData();

  return (
    <main className="align-element flex flex-col gap-10 p-10  items-center content-center justify-center shadow-md ">
      <section className="flex flex-wrap gap-10 p-10  items-center content-center justify-center">
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
      </section>
      <Paginator />
    </main>
  );
};
export default PokemonContainer;
