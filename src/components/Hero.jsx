import { ReactTyped, Typed } from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl  font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bond py-4">
          <p>Fast, flexible financing for</p>
          <ReactTyped
            strings={["BBC", "BTB", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="pl-2 md:pl-4"
          />
        </div>
        <p className="md:text-2xl text-l text-gray-500 font-bold">
          Monitor your data analytics to increase revenue for BTB,BTC,& SAAS
          platforms
        </p>
        <button className="text-black bg-[#00df9a] py-2 md:py-4 md:w-[200px] w-[140px] rounded-md font-medium mx-auto my-6">
          Get Started
        </button>
      </div>
    </div>
  );
};
