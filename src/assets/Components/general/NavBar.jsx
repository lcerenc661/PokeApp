import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#ffeeac] ">
      <div className="flex md:justify-between justify-center xl:px-32 lg:px-16 md:px-8">
        <div className="md:flex items-center font-bold gap-6 absolute md:relative  md:bottom-0 md:left-0 bottom-[-100%] left-[-100%]">
          <img
            src="/bonchanIMG.jpg"
            alt="Bonchan-logo"
            className="w-16  rounded-lg  my-2"
          />

          <img src="/pokemon-logo.svg" alt="pokemon-logo" className="h-10 " />
        </div>
        <div className="flex  gap-16  md:gap-8 ">
          <Link className="flex items-center" to="/">
            <button>Home</button>
          </Link>
          <Link className="flex items-center" to="/pokedex/pokemons">
            <button>Pokedex</button>
          </Link>
          <Link className="flex items-center" to="/pokedex/pokemons">
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
