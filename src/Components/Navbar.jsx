import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

 const [NavFix, setNavFix] = useState(false)

  const fixedNav = () => {
    if (window.scrollY >= 25) {
       setNavFix(true)
    } else {
        setNavFix(false)
    }
}

window.addEventListener('scroll', fixedNav)
  return (
    <>
     {/* top section Desktop  */}
     <div className="lg:flex justify-center gap-16 text-gray-200 py-4 font-medium hidden bg-primary">
        <div className="flex gap-2">
          <svg
            className="w-6 h-6 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <div>
            <span className="block font-light">Call us :</span>
            <a href="tel:+234 807 769 1710" className="hover:text-neutral">+234 807 769 1710</a>
          </div>
        </div>
        <div className="flex gap-2">
          <svg
            className="w-6 h-6 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div>
            <span className="block font-light">Email us :</span>
            <a
              href="mailto:info@rccghohp.org"
              className="racking-wider hover:text-neutral"
            >
              info@rccghohp.org
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <svg
            className="w-6 h-6 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <span className="block font-light">Sunday Service:</span>
            <span>Mon-Fri: 8am – 5pm</span>
          </div>
        </div>
      </div>
    <nav className={NavFix? "navbar fixed top-0 w-full" : "navbar sticky top-0 w-full"}>
      <NavLink to="/" className="flex items-center logo">
        <img src={logo} alt="logo" className="h-14 rounded-full"/>
        <h3
          className="uppercase font-medium md:pl-2 hidden lg:flex text-sm text-white"
        
        >
          House <br /> of his <br /> presence
        </h3>
      </NavLink>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-menu"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink
          to="/"
          className="nav_link"
          activeClassName="is-active"
          exact={true}
        >
          {" "}
          <li>Home</li>
        </NavLink>
        
        <NavLink to="/about" className="nav_link" activeClassName="is-active">
          {" "}
          <li>About us</li>{" "}
        </NavLink>
        <NavLink to="/workprogress" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Give</li>
        </NavLink>
        <NavLink
          to="/resources"
          className="nav_link"
          activeClassName="is-active"
        >
          {" "}
          <li>Resources</li>{" "}
        </NavLink>
        <NavLink to="/workProgress" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Events</li>{" "}
        </NavLink>
        <NavLink to="/contact" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Contact Us</li>{" "}
        </NavLink>

       
        <NavLink to="/workProgress" className="liveStream">
          {" "}
          <li>Live stream</li>{" "}
        </NavLink>
       
      </ul>
      <div
        className="mobile-menu-icon md:pr-12 pt-1"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
