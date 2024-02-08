import CardComponent from "./CardComponent";

const LandingContainer = () => {
  return (
    <div
      className="grid gap-8 md:grid-cols-2 items-center p-8"
      id="landing-container">
      <div>
        <p className="text-6xl font-thin">
          Enjoy <span className="font-bold"> Pokemon</span>
        </p>
        <p className="mt-10 mr-5 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          architecto adipisci earum maxime eos illum minus quos pariatur
          perspiciatis incidunt neque unde veniam eaque magni corporis
          repudiandae explicabo, hic quod?
        </p>
      </div>

      <div className="flex gap-8 flex-wrap it justify-center">
        <CardComponent text="Pokemons" link="/pokemons" />
        <CardComponent text="Games" link="/pokemons"/>
      </div>
    </div>
  );
};
export default LandingContainer;
