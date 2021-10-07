import React from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import Navbar from "../Components/Navbar";

const Give = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Navbar />

      <div>
          
      </div>
    </motion.div>
  );
};

export default Give;
