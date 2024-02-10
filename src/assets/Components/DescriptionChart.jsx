import { useLoaderData } from "react-router-dom";

const DescriptionChart = () => {
  const { height, weight, types, abilitiesReduced } = useLoaderData();
  console.log(height, weight, types, abilitiesReduced);

  return (
    <div className="flex flex-col self-end ">
      <h3 className="text-6xl font-bold text-end text-[#ffdd59] " >Pokedex Data</h3>
      <div className="border-t-2 border-[#ffdd59] flex flex-col p-4">
        <h1 className="font-bold text-xl">Pokemon Biometrics</h1>
        <div className="flex justify-between mb-2">
          <p>
            Height: <span> {(height / 10).toFixed(2)} m </span>
          </p>
          <p>
            Weight: <span> {(weight / 10).toFixed(2)} kg </span>
          </p>
        </div>
        <h1 className="font-bold text-xl">Types</h1>
        <div className="mb-2">
          <p>
            {types.map((type) => (
              <span key={type.type.name}> {type.type.name} </span>
            ))}{" "}
          </p>
        </div>
        <h1 className="font-bold text-xl">Abilities</h1>
        <div>
          <p>
            {abilitiesReduced.map((ability) => (
              <span key={ability}> {ability} </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DescriptionChart;
