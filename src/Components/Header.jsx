import React from "react";
import Navbar from "./Navbar";

const Header = ({ bgImage, homeTitle, homeDesc }) => {
  return (
    <div className="header flex flex-col justify-between py-12" style={{background: `url(${bgImage})`}}>
     <div className="">
     {/* <Navbar /> */}
     </div>

     <div className="myContainer text-white hidden">
            <div className="hidden">
            <h2 className="font-black text-2xl md:text-4xl">{homeTitle}</h2>
            <p className="font-semibold tracking-wider text-base">{homeDesc}</p>
            </div>
     </div>
    </div>
  );
};

export default Header;
