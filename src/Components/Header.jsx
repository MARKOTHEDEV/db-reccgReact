import React from "react";
import Navbar from "./Navbar";

const Header = ({ bgImage }) => {
  return (
    <div
      className="header bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     <div className="absolute top-14">
     <Navbar />
     </div>
    </div>
  );
};

export default Header;
