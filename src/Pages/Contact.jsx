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
      <div className="myContainer mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-5">
          <div className="bg-primary py-5 px-5 text-white font-semibold">
            <h4>
              <span className="block pb-2 text-2xl">Contact Us</span> 5151 S
              Princeton Ave Chicago IL 60609 PO Box 17004 Chicago IL 60617
              Phone: 312-647-6775{" "}
              <span className="block pt-3">Email: info@rccghohp.org</span>{" "}
              <span className="block pt-4 text-sm">
                Enter your email address to subscribe to our newsletter
              </span>
            </h4>
            <div className="pt-5">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent border pl-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-white px-2"
                  style={{ paddingTop: 1, paddingBottom: 1 }}
                >
                  <i className="fas fa-paper-plane text-black py-1"></i>
                </button>
              </form>
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
