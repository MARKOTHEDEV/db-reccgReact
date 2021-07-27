import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary py-20 mt-10">
      <div className="myContainer">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
          <div>
            <h3 className="text-white pb-5 text-2xl">Fellow us</h3>

            <div className="text-xl text-white">
              <a href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!">
                <i className="fab fa-twitter px-5"></i>
              </a>
              <a href="#!">
                <i className="fab fa-instagram"></i>  
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
                to="/resources"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>Resources</li>{" "}
              </NavLink>
              <NavLink
                to="/events"
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
                {" "}
                <li>Contact</li>{" "}
              </NavLink>

              <NavLink
                to="/location"
                className="footer_link"
                activeClassName="is-active"
              >
                {" "}
                <li>Location</li>{" "}
              </NavLink>
              <NavLink to="/liveStream" className="liveStream">
                {" "}
                <li className="pb-1">Live stream</li>{" "}
              </NavLink>
              <li className="border-l-2 border-gray-300 footer_link hidden xl:flex"></li>
              <li className="hidden xl:flex">
                <i className="fas fa-search text-gray-300 pt-2 cursor-pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
