import React from "react";
import Navbar from "./Navbar";

const Header = ({ bgImage }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     <div>
     <Navbar />
     </div>
    </div>
  );
};

export default Header;
