import { useLoaderData } from "react-router-dom";
import { formatIdNumber } from "../../utils";

const PokemonTitle = () => {
  const { id, name } = useLoaderData();
  const newId = formatIdNumber(id);
  return (
    <div className="flex flex-col items-end ">
      <span className="md:text-6xl text-4xl  font-extrabold text-[#d2dae2] ">#{newId} </span>
      <h1 className="md:text-9xl text-7xl capitalize font-bold tracking-tighter text-[#485460]">{name}</h1>
    </div>
  );
};
export default PokemonTitle;
