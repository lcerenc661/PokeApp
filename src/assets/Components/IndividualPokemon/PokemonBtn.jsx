import { useNavigate, useLoaderData } from "react-router-dom";

const PokemonBtn = ( { align, text}) => {
  const navigate = useNavigate();
  const { id } = useLoaderData();

  const nextPage = (text) => {
    if (text === "prev") {
      return parseInt(id) - 1;
    }
    return parseInt(id) + 1;
  };

  return (
    <button
      className={` ${align} absolute bg-[#ffdd59] p-2 text-[#1e272e] px-4 md:rounded-xl rounded-md capitalize sm:text-base text-sm shadow-lg`}
      onClick={() => navigate(`../pokemon/${nextPage(text)}`)}>
      {text}
    </button>
  );
};
export default PokemonBtn;
