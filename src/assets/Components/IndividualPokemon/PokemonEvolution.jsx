import { useLoaderData } from "react-router-dom";
import PokemonCard from "../pokemons/PokemonCard";
import { GoTriangleRight } from "react-icons/go";

const PokemonEvolution = () => {
  const { evolutionInfo } = useLoaderData();
  console.log(evolutionInfo);
  return (
    <section className="md:col-span-2 flex flex-col ">
      <div className="px-8  py-4">
        <h3 className="text-6xl font-bold text-end mb-2 pb-8">
          Evolution Line
        </h3>
        <div className=" flex justify-between gap-4 items-center">
          {evolutionInfo.map((pokemon, index) => {
            const { name, types, id, sprites } = pokemon;
            const img = sprites.other["official-artwork"].front_default;
            const lastEvol = evolutionInfo.length - 1;
            return (
              <>
                <PokemonCard
                  name={name}
                  types={types}
                  id={id}
                  img={img}
                  key={id}
                />
                {index != lastEvol && <GoTriangleRight className="text-6xl" />}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PokemonEvolution;
