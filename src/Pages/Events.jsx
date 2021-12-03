import React from "react";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";
import { Link } from "react-router-dom";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import event from "../Images/event.jpg";
import { motion } from "framer-motion";


const Events = () => {
  return (
      <>
        <Header bgImage={heroBg3} homeTitle="Check Out All Our Events" />



              <br />
        <div class="flex flex-wrap -mx-2 mb-8" style={{padding:"1rem"}}>
          
          
              <motion.div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4" whileTap={{scale:".8"}} style={{
                cursor:"pointer"
                ,'transition':"all .7s ease-in-out"}}>
                <img src={event} alt="" style={{
                  width:"100%",height:"100%",borderRadius:"30px"
                }} />

              </motion.div>
             
              
             
   </div>



      </>
  );
};

export default Events;
