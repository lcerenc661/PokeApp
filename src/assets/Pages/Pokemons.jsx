import { customFetch, paginateArray, fetchIndvPokemons } from "../../utils";
import { Filters, Footer } from "../Components";
import { PokemonContainer } from "../Components";

export const loader = async ({ request }) => {
  const { search, page } = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(page)
  try {
    const response = await customFetch("");
    let pokemonsUrls = response.data.results;
    if (search) {
      pokemonsUrls = pokemonsUrls.filter((pokemon) =>
        pokemon.name.includes(search)
      );
    }
    if (pokemonsUrls.length >= 22) {
      const [paginatedPokemonsUrls, totalPages] = paginateArray(
        pokemonsUrls,
        21
      );
      const pokemonsList = await fetchIndvPokemons(
        page ? paginatedPokemonsUrls[page] : paginatedPokemonsUrls[1]
      );
      return { pokemonsList, totalPages, page };
    }
    const pokemonsList = await fetchIndvPokemons(pokemonsUrls);
    return { pokemonsList };
  } catch (error) {
    const errorMessage =
      error?.response?.data || "There was an error Loading the pokemons";
    console.log(errorMessage);
    return null;
  }
};

const Pokemons = () => {
  return (
    // <div className="bg-gradient-to-tl from-amber-300 to-yellow-100">
    <div className="bg-[#ffdd59] w-screen ">
      <Filters />
      <PokemonContainer />
      <Footer />
    </div>
  );
};
export default Pokemons;
