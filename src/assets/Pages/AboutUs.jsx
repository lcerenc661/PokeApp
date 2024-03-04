import { Footer } from "../Components";
import NavBar from "../Components/general/NavBar";
import { AboutUsFeature } from "../Components";
import { FaReact } from "react-icons/fa";
import { aboutUsData } from "../../utils/AboutUsData";

const AboutUs = () => {
  return (
    <main className="min-h-screen ">
      <NavBar />
      <div className="xl:mx-32 lg:mx-16 mx-10 flex flex-col justify-between my-8 md:my-16 lg:my-24">
        <div className="mb-16 text-[#485460] lg:mb-24">
          <h1 className="lg:text-8xl md:text-7xl text-6xl capitalize font-bold tracking-tighter text-[#49535e] ">
            About Us
          </h1>
          <h2 className=" md:text-3xl text-2xl  font-light text-[#485460d2] mb-4 lg:mb-16">
            About this app
          </h2>
          <div className="grid lg:grid-cols-2 mt-8">
            <div className="flex items-center justify-center lg:row-span-2 lg:col-start-2">
              <FaReact className="text-blue-500 text-[8rem] lg:text-[12rem] mb-4" />
            </div>
            <p className="mb-4 lg:row-start-1">
              Explore 1000+ Pokémon with detailed stats, evolutions, body
              attributes, and shiny versions. This app, crafted as a learning
              project using React and libraries like react-query, redux, axios,
              and react-router, serves as a comprehensive showcase.
            </p>

            <p className="mb-4">
              Powered by the pokeApi API, the app features enhanced
              functionality, including logic layers for displaying selected
              Pokémon information, filter options, and pagination.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-12 md:grid md:grid-cols-2  lg:grid-cols-4 lg:mb-24">
          <h2 className="lg:text-8xl md:text-6xl text-4xl  font-extrabold text-[#49535e] mb-4 md:col-span-2 lg:col-span-4">
            Features
          </h2>
          {aboutUsData.map((feature, index) => {
            const { title, text, img } = feature;
            return (
              <AboutUsFeature
                title={title}
                text={text}
                img={img}
                key={title}
                number={index + 1}
              />
            );
          })}
        </div>
        <div className=" w-[8rem] h-[8rem] rounded-full self-center mb-4">
          <img
            src="/bonchanIMG.jpg"
            alt="bon chan img"
            className="rounded-full w-[8rem] h-[8rem]  object-cover "
          />
        </div>
        <h2 className="lg:text-6xl md:text-4xl text-2xl  tracking-tighter font-bold text-[#485460d2] text-center mb-8">
          Developed by Bon-chan Association
        </h2>
        <p className="font-extralight italic self-center">
          "Persistence is the engine that drives innovation in the ever-evolving
          landscape of technology." -{" "}
          <span className="font-normal not-italic"> Satya Nadella</span>
        </p>
      </div>

      <Footer />
    </main>
  );
};
export default AboutUs;
