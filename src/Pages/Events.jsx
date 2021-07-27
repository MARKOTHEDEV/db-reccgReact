import React from "react";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.png";

const Events = () => {
  return (
    <div>
      <Header bgImage={heroBg3} homeTitle="Testing" />

      <div className="py-10 bg-secondary mt-5">
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-gray-400 py-5 px-7 font-medium"
              style={{ color: "#e5e5e5" }}
            >
              <h3 className="uppercase pb-1 text-lg">let there be light</h3>
              <div className="w-24 h-1 bg-white mb-1" />
              <div>
                <h5 className="py-2">
                  Anthony Arro <i className="fas fa-microphone pr-2"></i>
                  <i className="fas fa-video"></i>
                </h5>
                <p>Text: Genesis 1:1-3</p>

                <button className="border font-semibold px-5 py-2 mt-5 text-white">
                  Next sermon
                </button>
              </div>
            </div>
            <div className="border-l-2">
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
                <SermonList sTitle="Let there be light"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

const SermonList = ({ sTitle }) => {
  return (
    <div className="flex px-10 mb-2"> 
      <h3 className="pr-5 border-b font-medium">{sTitle}</h3>
      <span className="border-b text-white">
        <i className="fas fa-microphone pr-2"></i>
        <i className="fas fa-video"></i>
      </span>
    </div>
  );
};
