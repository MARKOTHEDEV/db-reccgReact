import React from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import Header from "../Components/Header";
import heroBg2 from "../Images/contact.png";

const Contact = () => {

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header bgImage={heroBg2} homeTitle="Contact us" />

      <div>
        {/* contact */}
        <div className="myContainer my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-center">
            <div className="bg-primary pt-3 pb-8 px-4">
              <div className="flex justify-center">
                <i className="fas fa-phone-alt text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
              </div>

              <h3 className="text-white font-medium tracking-wide text-xl">
                PHONE
              </h3>
              <div className="text-gray-200 font-medium tracking-wide text-lg">
                <a href="tel: +234 902 0840 112" className="block pt-2 hover:text-secondary">
                  +234 902 0840 112
                </a>
                <a href="tel: +234 816 6413 223" className="hover:text-secondary">+234 816 6413 223</a>
              </div>
            </div>

            <div className="bg-primary pt-3 pb-8 px-4">
              <div className="flex justify-center">
                <i className="fas fa-envelope text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
              </div>

              <h3 className="text-white font-medium tracking-wide text-xl">
                EMAIL
              </h3>
              <div className="text-gray-200 font-medium tracking-wide text-lg">
                <a href="mailto: info@rccghohp.org" className="block pt-2 hover:text-secondary">
                  info@rccghohp.org
                </a>
              </div>
            </div>

            <div className="bg-primary pt-3 pb-8 px-4">
              <div className="flex justify-center">
                <i className="fas fa-map-marker-alt text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
              </div>

              <h3 className="text-white font-medium tracking-wide text-xl">
                ADDRESS
              </h3>
              <div className="text-gray-200 font-medium tracking-wide text-base pt-2">
                <span>
                  5151 S Princeton Ave Chicago IL 60609 PO Box 17004 Chicago IL
                  60617
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google map */}
        <iframe
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=5151%20S%20Princeton%20Ave%20Chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="google map"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
