import { customFetch } from "../../utils";
import { Footer } from "../Components";
import { PokemonContainer } from "../Components";
import axios from "axios";

export const loader = async () => {
  try {
    const response = await customFetch('');
    const pokemonsUrls = response.data.results;
    const pokemonsList = await Promise.all (pokemonsUrls.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return response.data;
    }));
    return pokemonsList;
    
  } catch (error) {
    const errorMessage = error?.response?.data || "There was an error Loading the pokemons"
    console.log(errorMessage)
  }
};

const Pokemons = () => {
  return (
    <div>
      <PokemonContainer />
      <Footer />
    </div>
  );
};
export default Pokemons;
