import { useLoaderData } from "react-router-dom";
import { getColorType } from "../../../utils";

const DescriptionChart = () => {
  const { height, weight, types, abilitiesReduced } = useLoaderData();

  return (
    <div className="flex flex-col self-end px-8">
      <h3 className="text-6xl font-bold text-end text-[#ffdd59]  pb-4 ">
        Pokedex Data
      </h3>
      <div className="border-t-2 border-[#ffdd59] flex flex-col p-4">
        <h1 className="font-bold text-xl">Pokemon Biometrics</h1>
        <div className="flex justify-between mb-2">
          <p className="text-[#b4b9be]">
            Height:{" "}
            <span className="text-lg font-bold text-[#485460] ">
              {" "}
              {(height / 10).toFixed(2)} m{" "}
            </span>
          </p>
          <p>
            Weight:{" "}
            <span className="text-lg font-bold text-[#485460] ">
              {" "}
              {(weight / 10).toFixed(2)} kg{" "}
            </span>
          </p>
        </div>
        <h1 className="font-bold text-xl mb-2">Types</h1>
        <div className="mb-4">
          <div className="flex gap-3 ">
            {types.map((type) => (
              <p
                key={type.type.name}
                className={`inline-block px-3 py-1 rounded-lg capitalize text-white text-xs sm:text-sm md:text-md ${getColorType(
                  type.type.name
                )} text-sm`}>
                {" "}
                {type.type.name}{" "}
              </p>
            ))}{" "}
          </div>
        </div>
        <h1 className="font-bold text-xl mb-2">Abilities</h1>
        <div>
          <div className="flex gap-3 items-center">
            {abilitiesReduced.map((ability) => (
              <p
                key={ability}
                className="inline-block px-[0.3rem] py-1 border-2 rounded-lg border-[#d2dae2] text-xs sm:text-sm md:text-md capitalize">
                {" "}
                {ability}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescriptionChart;
