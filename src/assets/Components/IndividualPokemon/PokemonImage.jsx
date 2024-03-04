import { useLoaderData } from "react-router-dom";
import PokemonBtn from "./PokemonBtn";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { toggleShiny } from "../../../features/shinnyToggle/shinyToggle";

const PokemonImage = () => {
  const { imgFront, imgShiny, id } = useLoaderData();
  const dispatch = useDispatch();
  const isShinny = useSelector((state) => state.shiny.showShiny);

  return (
    <div className="relative flex flex-col items-center justify-center row-span-2 justify-self-center bg-[#ffde591f]  sm:rounded-[80px] min-h-96 w-full  sm:w-[360px] md:w-auto transition-all ">
      <div className="flex items-center">
        {!isShinny ? (
          <img
            src={imgFront}
            alt="Pokemon Image"
            className="z-30 object-contain scale-75 p"
          />
        ) : (
          <img
            src={imgShiny}
            alt="Pokemon Image"
            className="z-30 object-contain scale-75"
          />
        )}
      </div>
      {/* <div className=" bg-[#d2dae2] absolute  w-2/6 h-4/6 bottom-0 left-0 z-10 "></div> */}
      <div className="absolute end-1/2 z-40 top-0 translate-x-2/4 px-8  flex  items-center">
        <button
          onClick={() => dispatch(toggleShiny())}
          className={`${
            !isShinny
              ? "bg-[#485460] shadow-md font-bold text-white"
              : "border-[#4854605d] border-[1px] text-xs text-[#d2dae2]"
          }  px-4 py-1  rounded-bl-lg transition-all`}>
          Regular
        </button>
        <button
          onClick={() => dispatch(toggleShiny())}
          className={`${
            isShinny
              ? "bg-[#485460] shadow-md font-bold text-white"
              : "border-[#4854605d] border-[1px] text-xs text-[#d2dae2]"
          } px-4 py-1   rounded-br-lg transition-all`}>
          Shiny
        </button>
      </div>
      {id > 1 && (
        <PokemonBtn
          align=" left-0 top-2/4 z-40 translate-y-[-50%] translate-x-[10%] sm:translate-x-[-50%]"
          text="prev"
        />
      )}

      {id < 1002 && (
        <PokemonBtn
          align="right-0 top-2/4 z-40 translate-y-[-50%]  translate-x-[-10%] sm:translate-x-[50%]"
          text="next"
        />
      )}
    </div>
  );
};
export default PokemonImage;
