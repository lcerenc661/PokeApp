import "./App.css";
import { LandingPage, Pokemons, IndPokemon, Error, Pokedex } from "./assets/Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// LOADERS
import { loader as pokemonsLoader } from "./assets/Pages/Pokemons";
import { loader as pokemonLoader } from "./assets/Pages/IndPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />,
  },
  {
    path: "/pokedex/",
    element: <Pokedex />,
    errorElement: <Error />,
    children: [
      {
        path: "pokemons",
        element: <Pokemons />,
        loader: pokemonsLoader,
      },
      {
        path: "pokemon/:id",
        element: <IndPokemon />,
        loader: pokemonLoader,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline">App</h1>
    </RouterProvider>
  );
}

export default App;
