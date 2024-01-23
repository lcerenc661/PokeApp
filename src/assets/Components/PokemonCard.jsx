const PokemonCard = ({ name, img, types, id }) => {

  const typesColor = {
    'normal': "bg-yellow-500",
    'fighting': "bg-rose-700",
    'flying': "bg-blue-600",
    'poison': "bg-fuchsia-500",
    'ground': "bg-orange-500",
    'rock': "bg-yellow-700",
    'bug': "bg-yellow-300",
    'ghost': "bg-pink-950",
    'steel': "bg-stone-950",
    fire: "bg-red-600",
    'water': "bg-sky-400",
    'grass': "bg-lime-600",
    'electric': "bg-stone-700",
    'psychic': "bg-pink-700",
    'ice':"bg-sky-500" ,
    'dragon': "bg-purple-500",
    'dark': "bg-rose-800",
    'fairy': "bg-pink-400",
    'unknown': "bg-zinc-600",
    'shadow': "bg-violet-900"}

  


  return (
    <div className="grid grid-flow-row grid-cols-1 rounded-xl justify-items-center min-w-60 max-w-80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-amber-50 duration-300 transition ease-in-out delay-150 cursor-pointer">
      <img
        src={img}
        alt="Pokemon"
        className="max-w-72 min-w-60 rounded-t-xl bg-gradient-to-r from-neutral-50 to-neutral-100 "
      />
      <div className="flex flex-col w-full justify-start ">
        <p className="text-left ml-3 font-bold text-slate-300">N-{id}</p>
        <p className="text-left text-2xl ml-3 font-semibold capitalize">
          {name}{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-1 justify-start w-full my-4">
        {types.map((type) => {
          const typeName = type.type.name;
          return (
            <p
              key={typeName}
              className={`w-1/4 max-w-xl  ml-3 ${typesColor[typeName]} rounded text-center capitalize text-white text-sm shadow`}>
              {typeName}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default PokemonCard;
