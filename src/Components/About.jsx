// import Laptop from "../assets/Who_4.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full z-50 bg-gray-200 lg:py-1  py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto flex justify-center items-center">
        <div className="flex flex-col  justify-center md:w-[60%] items-center  md:ml-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:text-4xl sm:text-3xl text-2xl font-semibold py-2 lg:py-1 text-gold-theme font-popins "
          >
            About Us
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black font-popins text-center my-4"
          >
            <span className="text-gold-theme">BLUEFIN GOLD GROUP</span> is a
            company involved in the implementation of{" "}
            <span className="text-gold-theme">large-scale infrastructure</span>
            and <span className="text-gold-theme">smart technology</span> driven
            projects for governments and businesses, as well as{" "}
            <span className="text-gold-theme">investments in AI</span> and other
            smart technology related companies that are or have the potential to
            be high-growth high-impact businesses that delivers both return on
            investment and return on impact in various industries and are
            synergistic with our mission to help shape a better future in the
            Smart Technology Era.
          </motion.p>
         
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center items-center my-2 lg:my-1">
        <div className="flex flex-col justify-center items-center md:w-[60%] md:ml-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:text-xl sm:text-xl text-2xl font-semibold py-2 lg:py-1 text-gold-theme font-popins "
          >
            Investing in
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black font-popins  capitalize my-4 flex flex-col items-center justify-start"
          >
            <span>Large Scale infrastructure Projects</span>{" "}
            <span>National Ai strategies </span>{" "}
            <span>large scale ai-driven digital transformation</span>{" "}
            <span>Smart Technology </span> <span>sustainable development</span>
            <span>smart cities</span>
          </motion.p>
         
        </div>
        {/* <div className="flex flex-col justify-center md:ml-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:text-4xl sm:text-3xl text-2xl font-semibold py-2 text-gold-theme font-popins "
          >
            About Us
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black font-popins "
          >
            <span className="text-gold-theme">BLUEFIN GOLD GROUP</span> is a
            company involved in the implementation of{" "}
            <span className="text-gold-theme">large-scale infrastructure</span>
            and <span className="text-gold-theme">smart technology</span> driven
            projects for governments and businesses, as well as{" "}
            <span className="text-gold-theme">investments in AI</span> and other
            smart technology related companies that are or have the potential to
            be high-growth high-impact businesses that delivers both return on
            investment and return on impact in various industries and are
            synergistic with our mission to help shape a better future in the
            Smart Technology Era.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-gold-theme border-2 text-gold-theme w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gold-theme hover:text-black"
          >
            Learn More
          </motion.button>
        </div> */}
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center items-center my-2 lg:my-1">
        <div className="flex flex-col justify-center md:w-[60%] items-center  md:ml-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:text-xl sm:text-xl text-2xl font-semibold py-2 lg:py-1 text-gold-theme font-popins "
          >
            Implementing
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black font-popins  capitalize my-4 flex flex-col items-center justify-start"
          >
            <span>Large Scale infrastructure Projects</span>{" "}
            <span>National Ai strategies </span>{" "}
            <span>large scale ai-driven digital transformation</span>{" "}
            <span>Smart Technology </span> <span>sustainable development</span>
            <span>smart cities</span>
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-gold-theme border-2 text-gold-theme w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gold-theme hover:text-black"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;
