import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const PokemonImage = () => {
  const { imgFront, imgShiny } = useLoaderData();
  const [gender, setGender] = useState("male");

  const handleGender = () => {
    console.log("clicked");
    if (gender === "male") {
      return setGender("female");
    }
    return setGender("male");
  };

  return (

      <div className="relative flex flex-col items-start translate-y-12 row-span-2 justify-self-center">
        {gender === "male" ? (
          <img src={imgFront} alt="Pokemon Image" className="z-40" />
        ) : (
          <img src={imgShiny} alt="Pokemon Image" className="z-40" />
        )}
        {/* <div className=" bg-[#d2dae2] absolute  w-2/6 h-4/6 bottom-0 left-0 z-10 "></div> */}
        <div className="absolute bg-[#ff5e57] z-50 rounded-full px-3">
          <button onClick={handleGender}>
            {gender === "male" ? "see Shiny" : "see regular"}
          </button>
        </div>
      </div>

  );
};
export default PokemonImage;
