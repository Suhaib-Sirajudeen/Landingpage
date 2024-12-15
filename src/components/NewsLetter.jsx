export const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white flex justify-center px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-2 md:my-4">
          <div className="flex flex-col sm:flex-row justify-center items-center w-full ">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-black w-full md:p-3 p-2 flex rounded-md md:ml-2 "
            />
            <button className="text-black bg-[#00df9a] ml-2 py-3 px-6 md:py-4 w-[200px] rounded-md font-medium my-6">
              Notify Me
            </button>
          </div>
          <p className="ml-2 ">
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
