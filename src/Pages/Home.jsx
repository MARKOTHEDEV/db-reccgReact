import React from "react";
import { Link } from "react-router-dom";
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.png";
import pbg from "../Images/Pbg.jpg";
import pastor from "../Images/pastor.png";
import pastorWife from "../Images/pastorswife.jpeg"
import belief from "../Images/belief.png";
import event from "../Images/event.jpg";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import HomeSlider from "../Components/HomeSlider";
import Navbar from "../Components/Navbar";
import { HomeBox, Sermon } from "../Components/SubComponents";
import useGetYouTubeVideo  from "../Components/useYouTubeVideo"
import {useEffect} from 'react'
import { useState } from "react/cjs/react.development";

import Preloader from "../Components/Preloader"
import useAxios from "../Components/useAxios";


const Home = () => {

  const { youtubeVideosData , isPending ,error} = useGetYouTubeVideo(3);
// will chnge it when ready to show
  // const [isPending] =useState(true)
  //   const [youtubeVideosData,setYoutubeVideosData] = useState([])
  //   const [error,setError] =useState(false)
    


const{"axiosError":churchError,"axiosIspending":isChurchDataLoading,"axiosData":churchData,"axiosErrorMessage":churchErrorMessage } =useAxios('church-detail/');
const{"axiosError":missionError,"axiosIspending":isMissionLoading,"axiosData":missionData,"axiosErrorMessage":missionErrorMessage } =useAxios('mission-detail/');
const{"axiosError":pastorAndWifeError,"axiosIspending":ispastorAndWifeLoading,"axiosData":pastorAndWifeData,"axiosErrorMessage":pastorAndWifeErrorMessage } =useAxios('getFrontPagePastorData/');

console.log(pastorAndWifeData)
    
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >

     <Preloader show={(isChurchDataLoading&&isMissionLoading&&ispastorAndWifeLoading)?true:false} />

<Link to="/give">
<i class="marko-giveIcon fas fa-gifts"
style={{
  position:"fixed",
  bottom:"30px",
  color:"white",
  "padding":".5rem",left:"30px",
  backgroundColor:"#080b4b",
  borderRadius:"50%",
  "cursor":"pointer",
  textAlign:"center",zIndex:"1000","transform":"scale(1.7,1.7)"
  
}}
><span style={{'display':"block","padding":".1rem"}}>Give</span></i>

</Link>

      <Navbar />
      <HomeSlider />

      {/* intro */}
      <div className="intro mt-4 flex items-center">
        <div className="myContainer text-center">
          <h2 className="text-2xl lg:text-5xl font-semibold pb-4 tracking-wide">
            Welcome
          </h2>

          <div className="text-base font-medium">
            <p className="pb-9">Happy to have you with us in His Presence</p>
            <p>
              We will tell you a little story about our church. We are a people
              of faith, who loves the Lord wholeheartedly. In our quest to know
              more of Him, we have various ministries and programs specically
              designed for this purpose. You will see most of these at our site
              as you navigate it. We are a people given to PRAYER, WORSHIP and
              radical HOSPITALITY. House of His Presence exists to proclaim the
              whole counsel/mind of God as found in His Word
            </p>
          </div>
        </div>
      </div>

      {/* boxes */}

      <div className="myContainer mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {churchData.length!=0?<HomeBox
            bImage={b1}
            bTitle={churchData.heading}
            bDes={churchData.content[0].paragraph}
            linkTo={"/about"}

          />:""}
          
        {
          missionData.length!=0?<HomeBox
            bImage={b2}
            bTitle={missionData.heading}
            bDes={missionData.content.slice(0,4).map(data=>data.paragraph)}
            linkTo={"/about"}
          />:""
        }
          
          <HomeBox
            bImage={b3}
            bTitle="Join a Group"
            bDes="If you wish to become a part of our church or a volunteer to help those in need, our community is awaiting you with our open hearts."
            linkTo={"/departments"}
         
         />
        </div>
      </div>

      {/* pastor */}

      <div
        className="bg-no-repeat bg-center py-10"
        style={{ background: `url(${pbg})` }}
      >
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col lg:flex-row relative">
             {
               pastorAndWifeData.length!=0?(


                  <div className="bg-black py-7 px-8 lg:px-14 text-left rounded-3xl">
           
                                <div style={{'display':"flex"}}>
                                          <img
                                          src={pastorAndWifeData.pastor_image}
                                          alt="pastor"
                                          className="w-28 h-28 lg:-mr-6 z-10"
                                          />

                                              <div class="">
                                                  <img class="w-28 h-28 object-cover rounded-full border-2 border-black-500" 
                                                  src={pastorAndWifeData.pastor_wife_image}/>
                                              </div>
                                </div>
                                  <h3 className="text-white text-3xl">{pastorAndWifeData.header}</h3>
                                <h4 className="text-red-600 py-2">Senior Pastor</h4>
                                <p className="text-white text-justify">
                                                      {pastorAndWifeData.content}
                                    <br /><br />
                                                      <Link to="/all-minister" className="btnOne">
                                                      Read More
                                                    </Link>
                                </p>
              </div>
               ):""
             }
             
              
            </div>

            <div>
              <div
                className="text-center px-12 py-10 text-white rounded-xl"
                style={{
                  background: `url(${belief})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h3 className="pb-5 font-semibold text-2xl">Church Belief</h3>
                <p className="pb-6">
                  I believe with my heart that Jesus died for my sins on the
                  cross and I confess with my mouth that God raised Him from the
                  dead and Jesus is Lord over all
                </p>

                <Link to="/about" className="btnOne">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sermon */}
      <div className="pt-16 pb-6 mt-14" style={{ backgroundColor: "#FF4370" }}>
        <div className="myContainer">
          <h2 className="pb-7 font-bold text-2xl">SERMONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-16">
          

          {isPending?"":youtubeVideosData.map(data=>(

<Sermon
topic={data.title}
bText="Isaiah 61:1"
date={(()=>{

  let date = new Date(data.datePlublished) 
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
})()}
// "oct 3 2021"
vId={data.videoID}
/>

          ))}
           
            
          </div>

        <div className="flex justify-center mt-8">
        {/* https://www.youtube.com/c/RCCGHouseofHisPresenceChicago */}
        <Link to='/archive' className="py-2 rounded px-3 text-lg bg-red-700 hover:bg-red-900 transition ease-in-out duration-500 text-white font-medium capitalize">
          {/* <i className="fab fa-youtube pr-1"></i>  */}
        See more
        </Link>
        </div>
        </div>
      </div>

      {/* Publication */}
      <div className="my-16" style={{ backgroundColor: "#ef295738" }}>
        <div className="myContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-400">
            <div>
              <div className="flex justify-center">
                <button className="border font-semibold -mb-2 uppercase px-7 py-3 rounded-3xl text-white bg-gray-800 border-none">
                  Publications
                </button>
              </div>
              <div className="flex flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat flex justify-center items-center py-28"
                  style={{ backgroundImage: `url(${event1})` }}
                >
                  <Link
                    to="/events"
                    className="font-semibold btnOne"
                  >
                    READ MORE
                  </Link>
                </div>
                <div
                  className="bg-cover bg-center bg-no-repeat mt-5 flex justify-center items-center py-28"
                  style={{ backgroundImage: `url(${event2})` }}
                >
                  {" "}
                  <Link
                    to="/events"
                    className="font-semibold btnOne"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>




            <div
                  className="bg-cover bg-center bg-no-repeat mt-5 flex justify-center items-center py-28"
                  style={{ backgroundImage: `url(${event})` }}
                >
                  {" "}
                  <Link
                    to="/events"
                    className="font-semibold btnOne"
                    style={{backgroundColor:"rgb(8, 11, 75)"}}
                  >
                    View All Events
                  </Link>
                </div>
            {/* <div>
              <div className="flex justify-center">
                <button className="border font-semibold -mb-2 uppercase px-7 py-3 rounded-3xl text-white bg-gray-800 border-none">
                  events
                </button>
              </div>
              <img
                src={event}
                alt="event"
                className="w-full object-cover"
                style={{ height: "83%" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

