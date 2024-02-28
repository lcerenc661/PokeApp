import { Link } from "react-router-dom";
import { getColorType } from "../../../utils";

const PokemonCard = ({ name, img, types, id, evolution = "none" }) => {
  return (
    <Link
      to={`../pokemon/${id}`}
      className={`grid grid-flow-row grid-cols-1 rounded-t-3xl rounded-b-xl justify-items-center min-w-64 max-w-72 shadow-md  hover:bg-amber-50 ${
        evolution === "none"
          ? "bg-amber-50 hover:shadow-2xl hover:-translate-y-1 hover:scale-110"
          : " bg-amber-50 border-8 border-amber-300"
      } duration-300 transition ease-in-out delay-150 cursor-pointer`}>
      <div className="relative">
        <img
          src={"/pokeball.svg"}
          alt="Pokemon-ball"
          className="max-w-64 min-w-48  p-3 rounded-t-3xl absolute z-0 translate-x-15 opacity-80 scale-90 "
        />
        <img
          src={img}
          alt="Pokemon"
          className={`max-w-[15] min-w-48 rounded-t-2xl bg-[#d2dae2] bg-opacity-80 z-10 relative`}
        />
      </div>
      <div className="flex flex-col w-full justify-start ">
        <p className="text-left ml-3 font-bold text-slate-400">N-{id}</p>
        <p className="text-left text-2xl ml-3 font-bold capitalize text-[#485460] ">
          {name}
        </p>
      </div>
      <div className="flex flex-wrap gap-1 justify-start w-full my-4">
        {types.map((type) => {
          const typeName = type.type.name;
          return (
            <p
              key={typeName}
              className={`w-1/4 max-w-xl  ml-3 ${getColorType(
                typeName
              )} rounded text-center capitalize text-white text-sm shadow`}>
              {typeName}
            </p>
          );
        })}
      </div>
    </Link>
  );
};
export default PokemonCard;
