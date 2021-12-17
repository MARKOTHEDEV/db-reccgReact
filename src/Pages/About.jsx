import React from "react";
import Header from "../Components/Header";
import heroBg2 from "../Images/hero2.jpg";
import about from "../Images/about.jpg";
import about1 from "../Images/hero3.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import { Link } from "react-router-dom";
import useAxios from "../Components/useAxios";

const About = () => {

  const{"axiosError":churchError,"axiosIspending":isChurchDataLoading,"axiosData":churchData,"axiosErrorMessage":churchErrorMessage } =useAxios('church-detail/');
  const{"axiosError":missionError,"axiosIspending":isMissionLoading,"axiosData":missionData,"axiosErrorMessage":missionErrorMessage } =useAxios('mission-detail/');
  const{"axiosError":believeError,"axiosIspending":isbelieveLoading,"axiosData":believeData,"axiosErrorMessage":believeErrorMessage } =useAxios('belief-detail/');
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header bgImage={heroBg2} homeTitle="About us" />

      <div
        className="py-14"
        style={{
          background: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="myContainer">
          {
            churchData.length!=0?(
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div></div>
            <div
              className="col-span-2 rounded-3xl py-10 px-7 text-white"
              style={{ backgroundColor: "#00000055" }}
            >
              <h3 className="font-semibold text-2xl pb-2">{churchData.heading}</h3>
              {
                churchData.content.map(data=><p>{data.paragraph}</p>)
              }
            </div>
          </div>

            ):""
          }
        </div>
      </div>

      {/* second */}

      <div
        style={{
          background: `url(${about1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 text-white">
         
        {
           missionData.length!=0 ?
           

           <div className="bg-black p-5">
            <h3 className="font-semibold text-2xl pb-2">{missionData.heading}</h3>
            <ul>
                {missionData.content.map(content=>(
                    <li key={content.id}>{content.paragraph}</li>
                ))}
            </ul>

           
          </div>
           
           :""
        }
          

          <div></div>

          <div></div>
        
        {
          believeData.length !=0?
          <div className="bg-black p-5 text-justify" >
          <h3 className="font-semibold text-2xl pb-2 text-right">
            {believeData.heading}
          </h3>
          <ul>
              {believeData.content[0].paragraph}
          
          </ul>

          <div className="flex justify-end">
            <Link  to={`/our-beliefs/${ believeData.id}`} className="btnTwo mt-2">
              Read More
            </Link>
          </div>
        </div>:""
        }
         
        </div>
      </div>
    </motion.div>
  );
};

export default About;
