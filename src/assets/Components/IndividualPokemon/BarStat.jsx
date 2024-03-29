import { PiSwordBold } from "react-icons/pi";
import { FaShieldHalved } from "react-icons/fa6";
import { GiWalkingBoot } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiArmorUpgrade } from "react-icons/gi";
import { GiStoneSpear } from "react-icons/gi";

const BarStat = ({ stat, name }) => {
  console.log(name);

  const stateType = {
    speed: <GiWalkingBoot />,
    hp: <IoMdHeartEmpty />,
    attack: <PiSwordBold />,
    defense: <FaShieldHalved />,
    "special-defense": <GiArmorUpgrade />,
    "special-attack": <GiStoneSpear />,
  };

  const fillCircles = Math.round(stat / 10);
  const fillArr = [...Array(fillCircles * 2).keys()];
  const emptyCircles = 20 - fillCircles;
  const emptyArr = [...Array(emptyCircles * 2).keys()];

  return (
    <div className="flex  flex-col  mb-1 w-72 xl:w-[26rem] justify-self-center ">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <p className="mr-4" > 
          {stateType[name]}

          </p>
          <p className="uppercase font-bold tracking-tight text-[#485460]">
            {name}
          </p>
        </div>
        <p className="tracking-wider text-sm  italic text-[#485460] ">
          {" "}
          {stat}/200{" "}
        </p>
      </div>

      <div className="flex justify-between border-b-2 border-[#ffe78b] pb-[6px] mb-2">
        {fillArr.map((circle) => {
          return (
            <div
              key={circle}
              className="xl:w-3 xl:h-3 w-[5px] h-[5px] bg-[#665824] rounded-full  "></div>
          );
        })}
        {emptyArr.map((circle) => {
          return (
            <div
              key={circle}
              className="xl:w-3 xl:h-3 w-[5px] h-[5px] bg-[#fff5cd] rounded-full  "></div>
          );
        })}
      </div>
    </div>
  );
};
export default BarStat;