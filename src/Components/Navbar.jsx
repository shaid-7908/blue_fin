import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/blue_logo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex md:flex-row md:justify-around justify-between items-center h-24 bg-[#17204d] bg-opacity-50  mx-auto px-4 text-white uppercase ">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} className="md:w-[100px] w-[80px] " />
        <h1 className=" text-base  font-bold text-gold-theme ">
          BLUEFIN GOLD GROUP
        </h1>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex md:font-semibold"
      >
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <li className="p-4 cursor-pointer hover:text-gold-theme">Home </li>
        </Link>

        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <li className="p-4 cursor-pointer hover:text-gold-theme">About</li>
        </Link>
        <Link
          to="newsletter"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li className="p-4 cursor-pointer hover:text-gold-theme">Contact</li>
        </Link>
      </motion.ul>
      <div onClick={handleNav} className="block md:hidden text-gold-theme">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-100 bg-[#17204d] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold text-gold-theme m-4 ">
          BLUEFIN GOLD GROUP
        </h1>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={handleNav}
        >
          <li className="p-4 border-b border-gray-100">Home</li>
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={handleNav}
        >
          <li className="p-4 border-b border-gray-100">About</li>
        </Link>
        <Link
          to="newsletter"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li className="p-4" onClick={handleNav}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
