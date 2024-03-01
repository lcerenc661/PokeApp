import { customFetch, paginateArray, fetchIndvPokemons } from "../../utils";
import { Filters } from "../Components";
import { PokemonContainer } from "../Components";

const allPokemonsQuery = {
  queryKey: ["allPokemons"],
  queryFn: () => customFetch(),
};

const individualPokemonQuery = (idUrl, page = -1, search) => {
  return {
    queryKey: ["individualPokemon", idUrl, page, search],
    queryFn: () => fetchIndvPokemons(idUrl),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const { search, page } = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(page);
    try {
      const response = await queryClient.ensureQueryData(allPokemonsQuery);
      console.log(response);
      let pokemonsUrls = response.data.results;
      if (search) {
        pokemonsUrls = pokemonsUrls.filter((pokemon) =>
          pokemon.name.includes(search.toLowerCase())
        );
      }
      if (pokemonsUrls.length >= 21) {
        const [paginatedPokemonsUrls, totalPages] = paginateArray(
          pokemonsUrls,
          20
        );
        const pokemonsList = await queryClient.ensureQueryData(
          individualPokemonQuery(
            page ? paginatedPokemonsUrls[page] : paginatedPokemonsUrls[1],
            page,
            search
          )
        );
        return { pokemonsList, totalPages, page, search };
      }
      const pokemonsList = await queryClient.ensureQueryData(
        individualPokemonQuery(pokemonsUrls)
      );
      return { pokemonsList, search };
    } catch (error) {
      console.log("error");
      const errorMessage =
        error?.response?.data || "There was an error Loading the pokemons";
      console.log(errorMessage);
      return null;
    }
  };

const Pokemons = () => {
  return (
    // <div className="bg-gradient-to-tl from-amber-300 to-yellow-100">
    <div className="bg-[#ffdd59] w-screen pb-10">
      <Filters/>
      <PokemonContainer />
    </div>
  );
};
export default Pokemons;
