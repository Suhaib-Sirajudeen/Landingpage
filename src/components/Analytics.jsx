import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD </p>
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            ipsam, esse quos quae, fuga laudantium obcaecati tempore corporis
            rem alias voluptatum ipsa explicabo! Omnis quae doloremque
            cupiditate pariatur. Nisi, eum.
          </p>
          <button className="text-[#00df9a] bg-black font-medium rounded-md my-6 mx-auto md:mx-0 md:w-[200px] w-[140px] py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
