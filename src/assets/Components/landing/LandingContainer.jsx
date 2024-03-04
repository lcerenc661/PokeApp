import CardComponent from "./CardComponent";

const LandingContainer = () => {
  return (
    <div
      className="grid gap-8 lg:grid-cols-2 items-center gap-y-12 p-8"
      id="landing-container">
      <div className="mb-8">
        <p className="text-6xl font-thin">
          Enjoy <span className="font-bold"> Pokemon</span>
        </p>
        <p className="mt-10 mr-5  ">
          Welcome to the pokeAPP! Explore the vast world of Pokémon with our
          interactive Pokédex app. Unleash the power of knowledge as you search
          and discover information about your favorite Pokémon. Whether you're a
          seasoned Trainer or a curious newcomer, embark on a journey to learn
          the fascinating details of each Pokémon. Catch 'em all, one byte at a
          time!
        </p>
      </div>

      <div className="flex gap-8 flex-wrap it justify-center">
        <CardComponent
          text="Pokemons"
          link="pokedex/pokemons"
          largeText={
            "Explore 1000+ Pokémon with our Pokedex – your ultimate guide to their world"
          }
        />
        <CardComponent
          text="About us"
          link="/aboutUs"
          img="bonchanIMG.jpg"
          largeText={
            "Crafting digital adventures for Pokémon lovers – meet the what is behind the magic!"
          }
        />
      </div>
    </div>
  );
};
export default LandingContainer;
