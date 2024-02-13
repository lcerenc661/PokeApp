import { useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Paginator from "../general/Paginator";

const PokemonContainer = () => {
  const { pokemonsList } = useLoaderData();

  return (
    <main className=" flex flex-col gap-10   items-center content-center justify-center  bg-neutral-100 bg-opacity-75 my-10 xl:mx-32 lg:mx-16 md:mx-8 md:rounded-3xl pb-20  ">
      <section className="flex flex-wrap gap-10 py-16  items-center content-center justify-center px-2 ">
      {pokemonsList.map((pokemon) => {
        const { name, sprites, types, id } = pokemon;
        return (
          <PokemonCard
            key={id}
            name={name}
            id={id}
            img={sprites.other['official-artwork'].front_default}
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
