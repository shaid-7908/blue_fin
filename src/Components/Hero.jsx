//import React from "react";
import { Typewriter } from "react-simple-typewriter";
//import AnimateText from "../Utils/AnimateText";
//import Particles1 from "./Particles_1";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* <Particles1 /> */}
      <div className="text-white ">
        <div className="max-w-[1000px] mt-[-96px] w-full md:h-screen h-screen mx-auto text-center flex flex-col justify-center ">
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gold-theme font-bold p-2"
          >
            TOGETHER WE CAN GROW MORE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:text-3xl sm:text-3xl text-xl font-bold py-4"
          >
            INVESTING in & IMPLEMENTING{" "}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:text-4xl sm:text-3xl text-xl font-bold py-4"
          >
            <span className="text-gold-theme">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "LARGE SCALE INFRASTRUCTURE PROJECTS",
                  "⁠NATIONAl AI STRATEGIES",
                  "LARGE SCALE AI-DRIVEN DIGITAL TRANSFORMATION",
                  "SMART TECHNOLOGY",
                  "⁠SUSTAINABLE DEVELOPMENT",
                  "⁠SMART CITIES",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          {/* <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:text-3xl sm:text-3xl text-xl font-bold py-4"
          >
            IMPLEMENTING{" "}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:text-4xl sm:text-3xl text-xl font-bold py-4"
          >
            <span className="text-gold-theme">
              
              <Typewriter
                words={[
                  "LARGE SCALE INFRASTRUCTURE PROJECTS",
                  "⁠NATIONAl AI STRATEGIES",
                  "LARGE SCALE AI-DRIVEN DIGITAL TRANSFORMATION",
                  "SMART TECHNOLOGY",
                  "⁠SUSTAINABLE DEVELOPMENT",
                  "⁠SMART CITIES",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p> */}

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-[1px] border-gold-theme w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gold-theme uppercase"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Hero;
