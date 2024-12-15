export const Card = ({ img, margin, bgColor, btnColor, imgBg }) => {
  return (
    <div
      className={`w-full border  flex flex-col p-4 ${margin} rounded-lg shadow-xl hover:scale-105 duration-300 text-center ${bgColor}`}
    >
      <img src={img} alt="/" className={`w-20 mx-auto mt-[-3rem]  ${imgBg}`} />
      <h2 className="font-bold text-center text-2xl py-8">Single User</h2>
      <p className="text-4xl font-bold">$149</p>
      <div className="">
        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
      </div>
      <button
        className={` ${btnColor} py-2 md:py-4 md:w-[200px] w-[140px] rounded-md font-medium mx-auto my-6 `}
      >
        Start Trail
      </button>
    </div>
  );
};
