import React from "react";
import Header from "../Components/Header";
import heroBg2 from "../Images/hero2.jpg";
import about from "../Images/about.jpg";
import about1 from "../Images/hero3.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";

const About = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div></div>
            <div
              className="col-span-2 rounded-3xl py-10 px-7 text-white"
              style={{ backgroundColor: "#00000055" }}
            >
              <h3 className="font-semibold text-2xl pb-2">Our Church</h3>
              <p>
                We have a strong sense of community with parishioners. People
                and children of all ages here are encouraged to learn about
                their own faith and the role of the church in our community and
                worldwide.
              </p>
            </div>
          </div>
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
          <div className="bg-black p-5">
            <h3 className="font-semibold text-2xl pb-2">MISSION</h3>
            <ul>
              <li>To make heaven.</li>
              <li>To take as many people with us.</li>
              <li>To have a member of RCCG in every family of all nations.</li>
              <li>
                To accomplish No. 1 above, holiness will be our lifestyle.
              </li>
              <li>
                {" "}
                To accomplish No. 2 and 3 above, we will plant churches within
                five minutes walking distance in every city and town of
                developing countries and within five minutes driving distance in
                every city and town of developed countries.
              </li>
              <li>
                {" "}
                We will pursue these objectives until every Nation in the world
                is reached for the Lord Jesus Christ
              </li>
            </ul>

            <div className="flex justify-end">
              <button className="border font-semibold px-5 py-2 mt-5 text-white">
                Read more
              </button>
            </div>
          </div>

          <div></div>

          <div></div>

          <div className="bg-black p-5 text-justify">
            <h3 className="font-semibold text-2xl pb-2 text-right">
              OUR BELIEFS
            </h3>
            <ul>
              <li>
                {" "}
                Bible Teaching We believe that the entire Scripture, both Old
                and New Testament are written by the inspiration of the Holy
                Spirit – II Tim. 3:16-17. All the Christian teachings and the
                Christian attitude of the Children of God are such as are
                established in the Holy Bible – II Tim.3:10-15;II Peter
                1:21;John 17:17;Ps.119:105.
              </li>
              <li>
                {" "}
                We believe that the Bible is the written and revealed Will of
                God. Man’s position to God, the way to obtain salvation, woe and
                destruction awaiting sinners that refuse to repent and
                everlasting joy that is kept for the born again souls.All the
                Bible teachings are holy, what the Bible reveals as the will of
                God are such that we should accept, and whatever God writes in
                the Bible and His Law are to remain unchangeable; for the
                Heavens and Earth may pass away but the Word of God stands
                forever. Deut. 4:22; Rev. 22:18, 19;Matt.24:34-38.
              </li>
            </ul>

            <div className="flex justify-end">
              <button className="border font-semibold px-5 py-2 text-white mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
