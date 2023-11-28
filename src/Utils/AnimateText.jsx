import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimateText({ text, classNames }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  // const textArray = Array.isArray(text) ? text : [text];
  return (
    <>
      <h1 className={classNames}>
        <span className="sr-only">{text}</span>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInview ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1, duration: 0.1 }}
          aria-hidden
        >
          {text.split(" ").map((word, index) => (
            <span className="inline-block" key={index}>
              {word.split("").map((char, index) => {
                return (
                  <motion.span
                    className="inline-block"
                    variants={defaultAnimation}
                    key={index}
                  >
                    {char}
                  </motion.span>
                );
              })}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.span>
      </h1>
    </>
  );
}

export default AnimateText;
