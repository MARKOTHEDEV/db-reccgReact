import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar fixed top-0 w-full">
      <div className="flex items-center logo">
      <img src={logo} alt="logo" className="h-14 rounded-full"/>
        <h3 className="uppercase font-medium md:pl-2 hidden lg:flex text-sm" style={{color: "#e5e5e5"}}>
          House <br /> of his <br /> presence
        </h3>

       
      </div>
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
          <li>Home</li>{" "}
        </NavLink>
        <NavLink to="/about" className="nav_link" activeClassName="is-active">
          {" "}
          <li>About</li>{" "}
        </NavLink>
        <NavLink
          to="/resources"
          className="nav_link"
          activeClassName="is-active"
        >
          {" "}
          <li>Resources</li>{" "}
        </NavLink>
        <NavLink
          to="/Events"
          className="nav_link"
          activeClassName="is-active"
        >
          {" "}
          <li>Events</li>{" "}
        </NavLink>
        <NavLink to="/Contact" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Contact</li>{" "}
        </NavLink>
        
        <NavLink to="/contact" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Contact</li>{" "}
        </NavLink>
        <NavLink to="/location" className="nav_link" activeClassName="is-active">
          {" "}
          <li>Location</li>{" "}
        </NavLink>
        <NavLink to="/apply" className="apply">
          {" "}
          <li>Live stream</li>{" "}
        </NavLink>
      </ul>
      <div
        className="mobile-menu-icon md:pr-12"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
