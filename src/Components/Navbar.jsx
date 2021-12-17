import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [NavFix, setNavFix] = useState(false);
  const [liveStreamBtn,setLiveStreamBtn] = useState(false);
  const [showAboutDropDown,setShowAboutDropDown] = useState(false)

  const fixedNav = () => {
    if (window.scrollY >= 25) {
      setNavFix(true);
    } else {
      setNavFix(false);
    }
  };

  window.addEventListener("scroll", fixedNav);
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
            <a href="tel:+1 807 769 1710" className="hover:text-neutral">
              +1 807 769 1710
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div>
            <span className="block font-light">Email us :</span>
            <a
              href="mailto:info@rccghohp2021.org"
              className="racking-wider hover:text-neutral"
            >
               info@rccghohp2021.org
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
            <span className="block font-light">ADDRESS:</span>
            <span>5151 S Princeton Ave Chicago IL</span> <br />
          </div>
          <div>
            <span className="block font-light">PO Box:</span>
            <span>PO Box 17004 Chicago IL</span>

          </div>
        </div>
      </div>
      <nav
        className={
          NavFix ? "navbar fixed top-0 w-full" : "navbar sticky top-0 w-full"
        }
      >
        <NavLink to="/" className="flex items-center logo">
          <img src={logo} alt="logo" className="h-14 rounded-full" />
          <h3 className="uppercase font-medium md:pl-2 hidden lg:flex text-sm text-white">
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
            <li>Home</li>
          </NavLink>

          <NavLink to="#" 
          // showAboutDropDown,setShowAboutDropDown
          onClick={(e)=>setShowAboutDropDown(!showAboutDropDown)}
          className="nav_link" activeClassName="">
            {" "}
            <li>
              
              
              
              
            <div class="relative inline-block text-left">
  <div>
    <button  type="button" 
    // class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
    id="menu-button" aria-expanded="true" aria-haspopup="true"
            // style={{backgroundColor:"#080b4b",color:"whitesmoke"}}
    >
      About us
      {/* <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="flase">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg> */}
    </button>
  </div>


  <div 
  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style={{display:`${showAboutDropDown?"block":"none"}`}}>
    <div class="py-1" role="none">
      <Link 
      to="/about" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
        About us
      </Link>


      <Link 
      to="/departments" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
        Church Administration
      </Link>


      <Link 
      to="/all-minister" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
       Ministers
      </Link>

    </div>
  </div>
</div>
              
              </li>{" "}
          </NavLink>




















          
          <NavLink
            to="/give"
            className="nav_link"
            activeClassName="is-active"
          >
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

          <NavLink
            to="/gallery"
            className="nav_link"
            activeClassName="is-active"
          >
            {" "}
            <li>Our Gallery</li>{" "}
          </NavLink>


          <NavLink
            to="/events"
            className="nav_link"
            activeClassName="is-active"
          >
            {" "}
            <li>Events</li>{" "}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav_link"
            activeClassName="is-active"
          >
            {" "}
            <li>Contact Us</li>{" "}
          </NavLink>
          {/* https://www.youtube.com/c/RCCGHouseofHisPresenceChicago */}
          {/* <a href="" target="_blank" rel="noreferrer" >
           
            <li>Live stream</li>{" "}
          </a> */}




<div class="relative inline-block text-left">
  <div>
    <button onClick={(e)=>setLiveStreamBtn(!liveStreamBtn)} type="button" 
    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
    id="menu-button" aria-expanded="true" aria-haspopup="true"
            style={{backgroundColor:"#080b4b",color:"whitesmoke"}}
    >
      Live Stream
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="flase">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>


  <div 
  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style={{display:`${liveStreamBtn?"block":"none"}`}}>
    <div class="py-1" role="none">
      <Link 
      to="/archive" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
        Archive
      </Link>

      <a href="https://www.youtube.com/c/RCCGHouseofHisPresenceChicago" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
          Live Stream 
      </a>
      
    </div>
  </div>
</div>







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
