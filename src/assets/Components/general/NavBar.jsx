import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation()
  const actualPage = location.pathname.split('/')[1] || 'home'
  return (
    <div className="bg-[#ffeeac] w-full">
      <div className="flex md:justify-between justify-center xl:px-32 lg:px-16 md:px-8">
        <div className="md:flex items-center font-bold gap-6 absolute md:relative  md:bottom-0 md:left-0 bottom-[-100%] left-[-100%]">
          <img
            src="/bonchanIMG.jpg"
            alt="Bonchan-logo"
            className="w-16  rounded-lg  my-2"
          />

          <img src="/pokemon-logo.svg" alt="pokemon-logo" className="h-10 " />
        </div>
        <div className="flex just justify-around text-xl text-[#485460] py-2 gap-2">
          <Link className={`flex items-center`} to="/">
            <button className={`${actualPage ==="home" ? "text-[#ffffff]  bg-[#63636377]": ""} transition-all px-3 py-1 rounded-md`}>Home</button>
          </Link>
          <Link className="flex items-center" to="/pokedex/pokemons">
            <button className={`${actualPage ==="pokedex" ? "text-[#ffffff]  bg-[#63636377]": ""} transition-all px-3 py-1 rounded-md`}>Pokedex</button>
          </Link>
          <Link className="flex items-center" to="/aboutUs">
            <button className={`${actualPage ==="aboutUs" ? "text-[#ffffff]   bg-[#63636377]": ""} transition-all px-3 py-1 rounded-md`}>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
