import React from "react";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";
import { Link } from "react-router-dom";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import event from "../Images/event.jpg";
import { motion } from "framer-motion";
import useAxios from "../Components/useAxios";

const Events = () => {

  const{"axiosError":EventsError,"axiosIspending":isEventsDataLoading,"axiosData":EventsData,"axiosErrorMessage":EventsErrorMessage } =useAxios('all-events/');
console.log(EventsData)
  return (
      <>
        <Header bgImage={heroBg3} homeTitle="Check Out All Our Events" />



              <br />
        <div class="flex flex-wrap -mx-2 mb-8" style={{padding:"1rem"}}>
          
            {
              EventsData.length !=0?
                EventsData.map(data=>(

                  <motion.div class={`w-full md:w-1/2 lg:w-1/4  mb-4`} whileTap={{scale:".8"}} style={{
                    cursor:"pointer"
                    ,'transition':"all .7s ease-in-out",'position':'relative','overflow':"hidden",
                    borderRadius:"40px"
                    
                    
                    }}>
                      {/* cover */}
                      <div style={{position:"absolute",top:'0',left:'0','width':"100%",
                      
                        height:"100%",
                        background: "rgb(0,0,0)",padding:"0",
    background: " linear-gradient(0deg, rgba(0,0,0,0.6670868176372111) 32%, rgba(255,255,255,0.2553221117548582) 85%)"
                    }}></div>
                    <img src={data.image} alt=""   
    style={{
                      width:"100%",height:"100%"
                      // ,borderRadius:"30px",
                    
    
    
                    }} />
                    <h1 className=" text-2xl  "
                     style={{position:"absolute",bottom:'20%',color:'white',width:"94%",padding:"0 .5rem"}}
                     >
                     {data.name}
                     
                     
                     </h1>
    
                  </motion.div>
                ))
             
             :""
            }
              
              
             
   </div>



      </>
  );
};

export default Events;
