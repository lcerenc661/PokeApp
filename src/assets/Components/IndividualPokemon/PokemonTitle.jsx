import { useLoaderData } from "react-router-dom";
import { formatIdNumber } from "../../../utils";

const PokemonTitle = () => {
  const { id, name } = useLoaderData();
  const newId = formatIdNumber(id);
  return (
    <div className="flex flex-col items-end px-8 ">
      <span className=" lg:text-7xl md:text-5xl text-3xl  font-extrabold text-[#d2dae2] ">#{newId} </span>
      <h1 className="lg:text-8xl md:text-7xl text-6xl capitalize font-bold tracking-tighter text-[#485460]">{name}</h1>
    </div>
  );
};
export default PokemonTitle;
