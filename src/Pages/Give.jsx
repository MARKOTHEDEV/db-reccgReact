import React from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import Navbar from "../Components/Navbar";
import bg from "../Images/giveBg1.jpg";

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

      <div
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center myContainer pt-24 pb-28 text-white">
          <h2 className="font-bold text-3xl md:text-5xl">
            Tithes and Offering
          </h2>
          <p className="text-xl font-medium pt-1">Worship through giving</p>

          <div className="flex justify-center">
            <div className="border mt-24 py-10 px-5 rounded bg-gray-300 text-primary">
              <p className="font-medium md:font-semibold text-3xl">
                Donate through Zelle or PayPal to:{" "}
                <span className="border-b-2 border-black">
                  hohispresence@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Give;
