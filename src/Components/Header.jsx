import React from "react";
import Navbar from "./Navbar";

const Header = ({ bgImage, homeTitle, homeDesc }) => {
  return (
    <div
      className="header w-full flex flex-col justify-between"
      style={{ background: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="">
        <Navbar />
      </div>

      <div className="myContainer text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-left">
          <div>
            <h2 className="font-black text-2xl md:text-4xl pb-10">{homeTitle}</h2>
            <p className="font-semibold tracking-wider text-base">
              {homeDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
