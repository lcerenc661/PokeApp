import { useLoaderData } from "react-router-dom";
import BarStat from "./BarStat";

const StatsChart = () => {
  const { statsReduced } = useLoaderData();

  return (
    <section className=" md:col-span-2  flex flex-col w-auto bg-[#ffdd59] ">
      <div className="px-8  py-4">
        <h3 className="text-6xl font-bold text-end text-white">
          Base Attributes
        </h3>
        <div className=" md:grid md:grid-cols-2">
          {Object.entries(statsReduced).map((stat) => {
            return <BarStat key={stat[0]} stat={stat[1]} name={stat[0]} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default StatsChart;
