import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
import { Card } from "./Card";

export const CardContainer = () => {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <div className=" max-w-[1240px] w-full mx-auto grid md:grid-cols-3 gap-8">
        <Card
          img={single}
          margin={"my-4"}
          btnColor={" text-black bg-[#00df9a]"}
          imgBg={"bg-white"}
        />
        <Card
          img={double}
          margin={" md:my-0 my-8"}
          bgColor={"bg-gray-100"}
          btnColor={" text-[#00df9a] bg-black "}
          imgBg={"bg-transparent"}
        />
        <Card
          img={triple}
          margin={"my-4"}
          btnColor={" text-black bg-[#00df9a]"}
          imgBg={"bg-white"}
        />
      </div>
    </div>
  );
};
