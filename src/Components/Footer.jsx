//import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:flex-col gap-8 text-black font-popins">
      <div>
        <h1 className="w-full text-3xl font-bold text-gold-theme">
          BLUEFIN GOLD GROUP{" "}
        </h1>

        <p className="py-1">
          <span className="font-semibold text-gold-theme">Investing</span> &{" "}
          <span className="font-semibold text-gold-theme">Implementing</span>{" "}
          <span>Large Scale infrastructure Projects</span>,{" "}
          <span>National Ai strategies </span>,{" "}
          <span>large scale ai-driven digital transformation</span>,{" "}
          <span>Smart Technology </span>, <span>sustainable development</span>,
          <span>smart cities</span>
        </p>

        <div className="flex lg:justify-start justify-between md:w-[75%] my-6 text-black">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} className="lg:mx-1" />
          <FaTwitterSquare size={30} className="lg:mx-1" />
          <FaGithubSquare size={30} className="lg:mx-1" />
          <FaDribbbleSquare size={30} className="lg:mx-1" />
        </div>
      </div>
      <hr/>
        <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="text-left md:flex-col md:items-start">
          <h1 className="font-bold text-gold-theme">Menu</h1>
          <ul className="lg:flex">
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
              <li className="md:pr-2 py-1 text-sm cursor-pointer hover:text-gold-theme">
                Home{" "}
              </li>
            </Link>
            <li className="md:pr-2 lg:pl-2 py-1 text-sm cursor-pointer hover:text-gold-theme">
              Approach
            </li>
            <li className="md:pr-2 lg:pl-2 py-1 text-sm cursor-pointer hover:text-gold-theme">
              Portfolio
            </li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="md:pr-2 lg:pl-2 py-1 text-sm cursor-pointer hover:text-gold-theme">
                About
              </li>
            </Link>
            <li className="md:pr-2 lg:pl-2 py-1 text-sm cursor-pointer hover:text-gold-theme">
              Contact
            </li>
          </ul>
        </div>
        {/* <div>
          <h6 className="font-medium text-gold-theme">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div> */}
        {/* <div>
          <h6 className="font-medium text-gold-theme">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div> */}
        {/* <div>
          <h6 className="font-medium text-gold-theme">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div> */}
      </div>
      
    </div>
  );
}

export default Footer;
