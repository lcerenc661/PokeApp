import { useLoaderData } from "react-router-dom";
import BarStat from "./BarStat";

const StatsChart = () => {
  const { statsReduced } = useLoaderData();
  console.log(Object.entries(statsReduced));
  const { attack, defense, hp, speed } = statsReduced;
  const specialAttack = statsReduced["special-attack"];
  const specialDefense = statsReduced["special-defense"];
  console.log(attack, defense, hp, speed, specialAttack, specialDefense);
  return (
    <section className="flex flex-col w-auto bg-[#ffdd59]">
      <div className="mx-8  my-4">
        <h3 className="text-6xl font-bold text-end text-white" >Base Attributes</h3>
        {Object.entries(statsReduced).map((stat) => {
          return <BarStat key={stat[0]} stat={stat[1]} name={stat[0]} />;
        })}
      </div>
    </section>
  );
};
export default StatsChart;
