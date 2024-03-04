import { useLoaderData } from "react-router-dom";
import PokemonCard from "../pokemons/PokemonCard";
import { GoTriangleRight } from "react-icons/go";

const PokemonEvolution = () => {
  const { evolutionInfo, name } = useLoaderData();
  const pokemonName = name;
  if (!evolutionInfo) {
    return (
      <div className="px-4  py-4 flex flex-col sm:flex-row md:gap-10 gap-4 items-center justify-center">
        <h3 className="text-6xl mb-2 font-light pb-8 text-[#485460]">
          <span className="capitalize font-bold">{name}</span> does not evolve!
        </h3>
      </div>
    );
  }
  if (evolutionInfo.length < 2) {
    return (
      <section className="md:col-span-2 ">
        <div className="px-4 py-4 flex flex-col sm:flex-row md:gap-10 gap-4 items-center justify-center">
          <h3 className="text-6xl mb-2 font-light pb-8 text-[#485460]">
            <span className="capitalize font-bold">{name}</span> does not
            evolve!
          </h3>
          <div className=" flex flex-col lg:flex-row justify-between items-center self-center">
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
                    key={index}
                    evolution="evolution"
                  />
                  {index != lastEvol && (
                    <GoTriangleRight className="text-[8rem] lg:rotate-0 rotate-90 text-[#485460]" />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="md:col-span-2 pb-8 ">
      <div className="px-4 py-4 flex flex-col gap-10">
        <h3 className="text-6xl font-bold text-end mb-2 pb-8 text-[#485460]">
          Evolution Line
        </h3>
      <div className=" flex flex-col lg:flex-row justify-between items-center self-center lg:p-16 md:px-8 px-4 py-16  bg-[#48546009]  rounded-3xl">
          {evolutionInfo.map((pokemon, index) => {
            const { name, types, id, sprites } = pokemon;
            const img = sprites.other["official-artwork"].front_default;
            const evolution = pokemonName === name ? "evolution" : "none";
            const lastEvol = evolutionInfo.length - 1;
            return (
              <>
                <PokemonCard
                  name={name}
                  types={types}
                  id={id}
                  img={img}
                  key={name}
                  evolution={evolution}
                />

                {index != lastEvol && (
                  <GoTriangleRight className="text-[8rem] lg:rotate-0 rotate-90 text-[#485460]" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PokemonEvolution;
