import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";


const Resources = () => {
  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}
    >
      <Header bgImage={heroBg3} homeTitle="Our Department" />
      <div className="text-center my-10 myContainer">
        <h2 className="font-extrabold text-xl lg:text-3xl">
          VARIOUS DEPARTMENTS AT THE <br className="hidden lg:flex" /> RCCG
          HOUSE OF HIS PRESENCE
        </h2>
      </div>

      <div className="py-14 bg-secondary">
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div></div>
            <div
              className="col-span-2 rounded-3xl py-10 px-7 text-white"
              style={{ backgroundColor: "#000000" }}
            >
              <h3 className="font-semibold text-lg pb-2">  
                CHURCH ADMINISTRATION{" "}
              </h3>
              <p className="text-justify">
                The Church Administration Department will oversee the smooth
                running & the efficiency of the Church.This will include but not
                limited to,organizing the people and resources toward the common
                goals and objectives of the church, ensuring security around the
                church,and controlling the church’s physical assets.
              </p>

              <div className="flex justify-end">
                <Link to="/departments" className="btnTwo mt-3">
                  NEXT <i className="fas fa-arrow-right pl-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resources;
