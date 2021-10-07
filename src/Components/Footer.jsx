import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary pt-20 pb-7 mt-10">
      <div className="myContainer">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
          <div>
            <h3 className="text-white pb-5 text-2xl">Fellow us</h3>

            <div className="text-xl text-white">
              <a
                className="hover:text-secondary"
                href="https://www.facebook.com/profile.php?id=100071388745960"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="hover:text-secondary"
                href="https://vm.tiktok.com/ZMRWb4rpP/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-tiktok px-5"></i>
              </a>
              <a
                className="hover:text-secondary"
                href="https://www.instagram.com/rccg_hohispresence/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="hover:text-secondary"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/RCCGHouseofHisPresenceChicago"
              >
                <i className="fab fa-youtube px-5"></i>
              </a>
            </div>
          </div>

          <div className="col-span-3">
            <ul className="flex justify-between text-white flex-wrap gap-4">
              <NavLink
                to="/"
                className="footer_link"
                activeClassName="is-active"
                exact={true}
              >
                {" "}
                <li>Home</li>{" "}
              </NavLink>
              <NavLink
                to="/about"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>About us</li>{" "}
              </NavLink>
              <NavLink
                to="/give"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>Give</li>{" "}
              </NavLink>
              <NavLink
                to="/resources"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>Resources</li>{" "}
              </NavLink>
              <NavLink
                to="/workProgress"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>Events</li>{" "}
              </NavLink>
              <NavLink
                to="/contact"
                className="footer_link"
                activeClassName="is-active"
              >
                <li>Contact Us</li>
              </NavLink>

              <a href="https://www.youtube.com/c/RCCGHouseofHisPresenceChicago" target="_blank" rel="noreferrer" className="liveStream hidden lg:flex">
               
                <li className="pb-1">Live stream</li>
              </a>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
              <div className="bg-primary text-white font-medium">
                <div>
                  <span className="block pt-4 ">
                    Enter your email address to subscribe to our newsletter
                  </span>
                </div>
                <div className="pt-5">
                  <form className="flex">
                    <input
                      type="text"
                      required
                      placeholder="Enter your email..."
                      className="bg-transparent border pl-2 py-1 w-full"
                    />
                    <button
                      type="submit"
                      className="bg-white px-2"
                      style={{ paddingTop: 1, paddingBottom: 1 }}
                    >
                      <i className="fas fa-paper-plane text-black py-1"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex items-end">
                <p className="text-white">
                  © {year}. Rccg House Of His Presence. All Rights Reserved
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
