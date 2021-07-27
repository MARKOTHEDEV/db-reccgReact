import React from "react";
import Header from "../Components/Header";
import heroBg2 from "../Images/hero2.png";
import about from "../Images/about.jpg"

const About = () => {
  return (
    <div>
      <Header bgImage={heroBg2} homeTitle="About us" />

      <div  style={{
                  background: `url(${about})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
        <div className="myContainer">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
