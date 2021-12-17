import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import useAxios from "../Components/useAxios";


const Resources = () => {

  const{"axiosError":ResourceError,"axiosIspending":isResourceDataLoading,"axiosData":ResourceData,"axiosErrorMessage":ResourceErrorMessage } =useAxios('resource/');

  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}
    >
      <Header bgImage={heroBg3} homeTitle="Our Resources" />
    


      <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                  {
isResourceDataLoading==false && ResourceData.length!=0?ResourceData.map((data)=>(
  <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={data.id}>
  {/* <div class="flex justify-center md:justify-end -mt-16">
      <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={pastor}/>
  </div> */}
  <div>
      <h2 class="text-gray-800 text-3xl font-semibold">{data.heading} </h2>
      <p class="mt-2 text-gray-600">
          {data.content}
        </p>
  </div>
  <div class="flex justify-end mt-4">
      <a  class="text-xl font-medium text-indigo-500">John Doe</a>
  </div>
  </div>

))

:""
}



                    
            <div>


            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default Resources;
