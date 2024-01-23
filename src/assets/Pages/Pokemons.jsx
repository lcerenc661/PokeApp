import { customFetch, paginateArray, fetchIndvPokemons } from "../../utils";
import { Filters, Footer} from "../Components";
import { PokemonContainer } from "../Components";



export const loader = async ({ request }) => {
  const { search } = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const response = await customFetch("");
    let pokemonsUrls = response.data.results;
    if (search) {
      pokemonsUrls = pokemonsUrls.filter((pokemon) =>
        pokemon.name.includes(search)
      );
    }
    if (pokemonsUrls.length >= 31) {
      const [paginatedPokemonsUrls, totalPages] = paginateArray(pokemonsUrls, 30);
      console.log(paginatedPokemonsUrls[1])
      const pokemonsList = await fetchIndvPokemons(paginatedPokemonsUrls[1])
      return { pokemonsList, totalPages };
    }
    const pokemonsList = await fetchIndvPokemons(pokemonsUrls)
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
    <div>
      <Filters />
      <PokemonContainer />
      <Footer />
    </div>
  );
};
export default Pokemons;
