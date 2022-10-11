import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import blackWave from "./side-bar.svg";

function Navbar() {
  const currentloc = String(window.location); //Gets current URL
  let currenttab = currentloc.substring(currentloc.lastIndexOf("/") + 1); //Gets current element from navbar

  if (currenttab[currenttab.length - 1] === "?") {
    //When search bar is used, preventing bug of nothing being active in navbar
    currenttab = currenttab.substring(0, currenttab.length - 1); //Removing ? sign when search bar used
  }

  if (currenttab.length === 0) {
    //When visiting home section
    currenttab = "home";
  }

  const [active, setActive] = useState(currenttab);
  const [navOpen, toggleNav] = useState(0);

  // Handling the case for back button press.
  window.onpopstate = function () {
    const currentloc = String(window.location); //Gets current URL
    let currenttab = currentloc.substring(currentloc.lastIndexOf("/") + 1); //Gets current element from navbar

    if (currenttab[currenttab.length - 1] === "?") {
      //When search bar is used, preventing bug of nothing being active in navbar
      currenttab = currenttab.substring(0, currenttab.length - 1); //Removing ? sign when search bar used
    }

    if (currenttab.length === 0) {
      //When visiting home section
      currenttab = "home";
    }
    setActive(currenttab);
  };

  useEffect(() => {
    const ESC_KEY_CODE = 27;
    const toggleNavbarOnEsc = ({ keyCode }) => {
      if (keyCode === ESC_KEY_CODE) toggleNav((navOpen) => navOpen && !navOpen);
    };
    window.addEventListener("keydown", toggleNavbarOnEsc);
    return () => {
      window.removeEventListener("keydown", toggleNavbarOnEsc);
    };
  }, [toggleNav]);

  return (
    <div>
      <div
        className="hamburger"
        type="button"
        onClick={() => toggleNav(!navOpen)}
      >
        <span
          style={{
            width: "6vh",
            height: "1vh",
            transformOrigin: "70% 75% 0px",
            transform: navOpen ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        ></span>
        <span
          style={{
            width: navOpen ? "6vh" : "4.5vh",
            height: "1vh",
            transformOrigin: "80% 10% 0px",
            transform: navOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        ></span>
        <span
          style={{
            width: navOpen ? "0vh" : "3vh",
            height: "1vh",
            marginLeft: navOpen ? "4px" : "0px",
          }}
        ></span>
      </div>
      <img src={blackWave} className="blackWave" alt="sidebar"></img>
      <div id="sidenav" style={{ width: navOpen ? "100%" : "0px" }}>
        <ul className="navbar-nav">
          <Link to="/" className="navLink">
            <li
              className={active === "home" ? "nav-item active" : "nav-item"}
              onClick={() => {
                setActive("home");
                toggleNav(!navOpen);
              }}
            >
              Home
            </li>
          </Link>

          <Link to="/event" className="navLink">
            <li
              className={active === "event" ? "nav-item active " : "nav-item "}
              onClick={() => {
                setActive("event");
                toggleNav(!navOpen);
              }}
            >
              Event
            </li>
          </Link>

          {/* <Link className="navLink">
            {/* <li
              className={
                active === "community" ? "nav-item active " : "nav-item "
              }
              onClick={() => {
                setActive("");
                toggleNav(!navOpen);
              }}
            ></li> */}
          {/* </Link> */} */}
          <a
            href="https://hgresources.netlify.app/" style={{textDecoration: "none"}}
          >
            Resources
          </a>

          <Link to="/community" className="navLink">
            <li
              className={
                active === "community" ? "nav-item active " : "nav-item "
              }
              onClick={() => {
                setActive("community");
                toggleNav(!navOpen);
              }}
            >
              Community
            </li>
          </Link>

          <Link to="/members" className="navLink">
            <li
              className={
                active === "members" ? "nav-item active " : "nav-item "
              }
              onClick={() => {
                setActive("members");
                toggleNav(!navOpen);
              }}
            >
              Members
            </li>
          </Link>

          <Link to="/sponsors" className="navLink">
            <li
              className={
                active === "sponsors" ? "nav-item active " : "nav-item "
              }
              onClick={() => {
                setActive("sponsors");
                toggleNav(!navOpen);
              }}
            >
              Sponsors
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
