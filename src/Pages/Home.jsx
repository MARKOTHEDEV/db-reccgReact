import React from "react";
import { Link } from "react-router-dom";
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.png";
import pbg from "../Images/Pbg.jpg";
import pastor from "../Images/pastor.png";
import belief from "../Images/belief.png";
import event from "../Images/event.jpg";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import HomeSlider from "../Components/HomeSlider";
import Navbar from "../Components/Navbar";
import { HomeBox, Sermon } from "../Components/SubComponents";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
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
          <HomeBox
            bImage={b1}
            bTitle="Our Church"
            bDes="Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees anyone can join"
          />

          <HomeBox
            bImage={b2}
            bTitle="Our Mission"
            bDes="To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations. To accomplish No. 1 above, holiness will be ourlifestyle."
          />
          <HomeBox
            bImage={b3}
            bTitle="Join a Group"
            bDes="If you wish to become a part of our church or a volunteer to help those in need, our community is awaiting you with our open hearts."
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
              <img
                src={pastor}
                alt="pastor"
                className="w-28 h-28 lg:-mr-6 z-10"
              />
              <div className="bg-black py-7 px-8 lg:px-14 text-left rounded-3xl">
                <h3 className="text-white text-3xl">Anthony Arro</h3>
                <h4 className="text-red-600 py-2">Senior Pastor</h4>
                <p className="text-white text-justify">
                  At HOHP our prayer for you is that the God of all grace
                  anoints you with fresh oil and His precious Spirit illuminates
                  the Word as you read. May He empower you to effectively
                  communicate to others the vibrant hope that He has given you
                  to persevere the struggles that you have overcome and continue
                  to overcome. Furthermore, my wife and I pray that your home is
                  a reflection of the joy and peace that God has promised to all
                  of His children who follow Him.
                </p>
              </div>
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
          
            <Sermon
              topic="Thanksgiving Sunday service"
              bText="Isaiah 61:1"
              date="oct 3 2021"
              vId="TDuyfbGEYSo"
            />
              <Sermon
              topic="Divine advancement"
              bText="Philippians 3:12-14"
              date="oct 1 2021"
              vId="ZJVivHqhauQ"
            />
            <Sermon
              topic="Divine advancement"
              bText="Philippians 3:12-14"
              date="Sep 26 2021"
              vId="EW9MPXW98oc"
            />
          </div>

        <div className="flex justify-center mt-8">
        <a href="https://www.youtube.com/c/RCCGHouseofHisPresenceChicago" target="_blank" rel="noreferrer" className="py-2 rounded px-3 text-lg bg-red-700 hover:bg-red-900 transition ease-in-out duration-500 text-white font-medium capitalize"><i className="fab fa-youtube pr-1"></i> Watch and comment on youtube</a>
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

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

