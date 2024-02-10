import { PiSwordBold } from "react-icons/pi";
import { FaShieldHalved } from "react-icons/fa6";
import { GiWalkingBoot } from "react-icons/gi";

const BarStat = ({ stat, name }) => {
  const fillCircles = Math.round(stat / 10);
  const fillArr = [...Array(fillCircles * 2).keys()];
  const emptyCircles = 15 - fillCircles;
  const emptyArr = [...Array(emptyCircles * 2).keys()];

  return (
    <div className="flex  flex-col  mb-1 w-80 ">
      <PiSwordBold />


      <div className="flex justify-between">
        <p className="uppercase font-bold tracking-tight text-[#485460] ">
          {name}{" "}
        </p>
        <p className="tracking-wider text-sm italic text-[#808e9b] ">
          {" "}
          {stat}/150{" "}
        </p>
      </div>

      <div className="flex justify-between border-b-2 pb-2">
        {fillArr.map((circle) => {
          return (
            <div
              key={circle}
              className="w-2 h-2 bg-[#f71e16] rounded-full  "></div>
          );
        })}
        {emptyArr.map((circle) => {
          return (
            <div
              key={circle}
              className="w-2 h-2 bg-[#969696] rounded-full  "></div>
          );
        })}
      </div>
    </div>
  );
};
export default BarStat;
