import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const NotFoundPage = () => {
  return (
    <>
    <Navbar/>
    <div className="myContainer my-20">
      <div className="flex justify-center">
        <div className="bg-primary p-5 rounded-xl">
          <div className="bg-black flex justify-center items-center p-12 sm:p-20 rounded-md">
            <h3 className="text-white text-7xl font-black tracking-wider"> 
              404
            </h3>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 tracking-wider">
        <p className="font-semibold text-lg pb-2">This page does not exist</p>
        <Link to="/" className="text-xl font-semibold underline">
          Return to Home Page  
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFoundPage;
