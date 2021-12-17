import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useState } from "react";

export function HomeBox({ bImage, bTitle, bDes,linkTo }) {
  return (
    <div
      className="text-center px-12 py-10 text-white"
      style={{
        background: `url(${bImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="pb-5 font-semibold text-2xl">{bTitle}</h3>
      <p className="pb-6">{bDes}</p>

      <Link to={linkTo} className="btnOne">
        Learn More
      </Link>
    </div>
  );
}

export function Sermon({ date, topic, bText, vId }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <h3 className="uppercase bg-black inline-block text-white px-2 py-1">
          {date}
        </h3>
        <div className="bg-white py-5 px-3 font-medium">
          <h3 className="uppercase pb-1">{topic}</h3>
          <div className="w-20 h-1 bg-black mb-1" />
          <div>
            <h5>
              Anthony Aro{"  "}
              {/* <i className="fas fa-microphone hover:text-primary cursor-pointer pl-2 pr-3"></i> */}
              <i
                className="fas fa-video hover:text-primary cursor-pointer animate-bounce"
                onClick={() => setOpen(true)}
              ></i>
            </h5>
            {/* <p>Text: {bText}</p> */}
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={vId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export const DepList = ({ title, desc ,phone_number}) => {
  return (
    
              <div class="bg-white rounded-lg p-6">
                  <div class="flex items-center space-x-6 mb-4">
                      {/* <img class="h-28 w-28 object-cover object-center rounded-full" 
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" /> */}
                      <div>
                          <p class="text-xl text-gray-700 font-normal mb-1">{title}</p>
                          <p class="text-base text-blue-600 font-normal">{phone_number}</p>
                      </div>
                  </div>
                  <div>
                      <p class="text-gray-400 leading-loose font-normal text-base">{desc}</p>
                  </div>
              </div>
        
  );
};
