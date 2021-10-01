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

              <a className="hover:text-secondary" href="#!">
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
                {" "}
                <li>Contact Us</li>{" "}
              </NavLink>

              <NavLink to="/liveStream" className="liveStream">
                {" "}
                <li className="pb-1">Live stream</li>{" "}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
