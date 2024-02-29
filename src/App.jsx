import "./App.css";
import {
  LandingPage,
  Pokemons,
  IndPokemon,
  Error,
  Pokedex,
  AboutUS,
} from "./assets/Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//REDUX
import { store } from "./app/store";
import { Provider } from "react-redux";

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
  {
    path: "/aboutUs",
    element: <AboutUS />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <h1 className="text-3xl font-bold underline">App</h1>
      </RouterProvider>
    </Provider>
  );
}

export default App;
