import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 px-4 mx-auto max-w-[1240px]">
      <h1 className="text-[#00df9a]  font-bold text-3xl w-full">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 mt-4 border-r border-r-gray-900 h-full bg-[#000300] w-[60%] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-1000"
        }
      >
        <h1 className="text-[#00df9a]  font-bold text-3xl w-full p-4">
          REACT.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <li className="p-4 border-b border-gray-600 ">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4 border-b border-gray-600  ">Contact</li>
        </ul>
      </div>
    </div>
  );
};
