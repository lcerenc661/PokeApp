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

// REACT-QUERY
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// LOADERS
import { loader as pokemonsLoader } from "./assets/Pages/Pokemons";
import { loader as pokemonLoader } from "./assets/Pages/IndPokemon";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

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
        loader: pokemonsLoader(queryClient),
      },
      {
        path: "pokemon/:id",
        element: <IndPokemon />,
        loader: pokemonLoader(queryClient),
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
