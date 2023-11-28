import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/blue_logo.png";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex md:flex-col justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white uppercase ">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} className="w-[100px]" />
        <h1 className=" text-base font-bold text-gold-theme">
          BLUEFIN GOLD GROUP .
        </h1>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex md:font-semibold"
      >
        <li className="p-4 cursor-pointer hover:text-gold-theme">Home </li>
        <li className="p-4 cursor-pointer hover:text-gold-theme">Approach</li>
        <li className="p-4 cursor-pointer hover:text-gold-theme">Portfolio</li>
        <li className="p-4 cursor-pointer hover:text-gold-theme">About</li>
        <li className="p-4 cursor-pointer hover:text-gold-theme">Contact</li>
      </motion.ul>
      <div onClick={handleNav} className="block md:hidden text-gold-theme">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-gold-theme m-4 ">
          BLUFFIN GOLD GROUP .
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
