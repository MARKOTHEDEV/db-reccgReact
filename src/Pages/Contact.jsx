import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import banner from "../Images/contact_banner.jpg";
import Navbar from "../Components/Navbar";
import contact from "../Images/conatct.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Contact = () => {
  const initialState = {
    contactName: "",
    contactSubject: "",
    contactEmail: "",
    contactMessage: "",
  };

  const [person, setPerson] = useState(initialState);

  const [sending, setSending] = useState(false);

  const [openSuMeg, setOpenSuMeg] = useState(false);
  const [openErrorMsg, setOpenErrorMsg] = useState(false);
  const onCloseModal = () => setOpenSuMeg(false);
  const onCloseModalError = () => setOpenErrorMsg(false);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const myData = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ person }),
    });
    const lastData = await myData.json();
    // console.log("lastData", lastData);

    if (lastData.status === "success") {
      setOpenSuMeg(true);
      setSending(false);
    } else if (lastData.status === "fail") {
      setOpenErrorMsg(true);
      setSending(false);
    }

    setPerson(initialState);
  };

  return (
    <>
      {/* Form success message */}
      <Modal open={openSuMeg} onClose={onCloseModal}>
        <div className="mr-12">
          <h3 className="font-semibold text-lg pb-1"> Message sent !!!</h3>
          <p>We'll get back to you.</p>
        </div>
      </Modal>

      {/* Form failed message */}
      <Modal open={openErrorMsg} onClose={onCloseModalError}>
        <div className="mr-12">
          <h3 className="font-semibold text-lg pb-1"> Message failed !!!</h3>
          <p>Try again later.</p>
        </div>
      </Modal>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
      >
        <Navbar />
        <div
          className="text-white flex justify-center text-center items-center px-5 bg-center bg-cover bg-blend-overlay"
          style={{ backgroundImage: `url(${banner})`, height: "55vh" }}
        >
          <div data-aos="zoom-in">
            <h3 className="text-2xl md:text-4xl font-black pb-2 uppercase">
              Contact Us
            </h3>
          </div>
        </div>
        <div>
          {/* contact */}
          <div className="myContainer my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="font-semibold text-2xl">Get in touch</h3>
                <p className="pb-3 pt-2">
                  Feel free to include your prayer requests and the pastor will
                  receive them directly.
                </p>
                <div className="bg-gray-300 px-4 py-6 rounded">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        required
                        type="text"
                        name="contactName"
                        id="contactName"
                        placeholder="Full Name"
                        className="py-2 px-3 rounded-sm w-full focus:outline-none font-semibold"
                        value={person.contactName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="my-4">
                      <input
                        required
                        type="email"
                        name="contactEmail"
                        id="contactEmail"
                        placeholder="Enter Email"
                        className="py-2 px-3 rounded-sm w-full focus:outline-none font-semibold"
                        value={person.contactEmail}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        required
                        type="text"
                        name="contactSubject"
                        id="contactSubject"
                        placeholder="Enter Subject"
                        className="py-2 px-3 rounded-sm w-full focus:outline-none font-semibold"
                        value={person.contactSubject}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <textarea
                        required
                        name="contactMessage"
                        id="contactMessage"
                        className="w-full mt-4 pl-2 pt-2 h-28 resize-none focus:outline-none rounded-sm font-semibold"
                        placeholder="Message"
                        value={person.contactMessage}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="flex justify-center mt-2">
                      <button
                        type="submit"
                        className="bg-primary py-3 px-5 text-white font-semibold tracking-wider"
                      >
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center ">
                <img src={contact} alt="contact us" className="h-60" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
              <div className="bg-primary pt-3 pb-8 px-4">
                <div className="flex justify-center">
                  <i className="fas fa-phone-alt text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
                </div>

                <h3 className="text-white font-medium tracking-wide text-xl">
                  PHONE
                </h3>
                <div className="text-gray-200 font-medium tracking-wide text-lg">
                  <a
                    href="tel: +1 313 502 8164"
                    className="block pt-2 hover:text-secondary"
                  >
                    +1 313 502 8164 (Main)
                  </a>

                  {/* <br /> */}
                  <a
                    href="tel: +1 872 724 9130 "
                    className="block pt-2 hover:text-secondary"
                  >
                    +1 872 724 9130 
                  </a>


                </div>
              </div>

              <div className="bg-primary pt-3 pb-8 px-4">
                <div className="flex justify-center">
                  <i className="fas fa-envelope text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
                </div>

                <h3 className="text-white font-medium tracking-wide text-xl">
                  EMAIL
                </h3>
                <div className="text-gray-200 font-medium tracking-wide text-lg">
                  <a
                    href="mailto: info@rccghohp2021.org"
                    className="block pt-2 hover:text-secondary"
                  >
                    info@rccghohp2021.org
                  </a>
                </div>
              </div>

              <div className="bg-primary pt-3 pb-8 px-4">
                <div className="flex justify-center">
                  <i className="fas fa-map-marker-alt text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
                </div>

                <h3 className="text-white font-medium tracking-wide text-xl">
                  ADDRESS
                </h3>
                <div className="text-gray-200 font-medium tracking-wide text-base pt-2">
                  <span>
                    5151 S Princeton Ave Chicago IL 60609 PO Box 17004 Chicago
                    IL 60617
                  </span>
                </div>
              </div>

              <div className="bg-primary pt-3 pb-8 px-4">
                <div className="flex justify-center">
                  <i className="fas fa-map-marker-alt text-white text-2xl bg-secondary rounded-full mb-5 mt-3 flex justify-center items-center w-14 h-14"></i>
                </div>

                <h3 className="text-white font-medium tracking-wide text-xl">
                  PO BOX
                </h3>
                <div className="text-gray-200 font-medium tracking-wide text-base pt-2">
                  <span>PO Box 17004 Chicago IL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google map */}
          <iframe
            width="100%"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=5151%20S%20Princeton%20Ave%20Chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="google map"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
