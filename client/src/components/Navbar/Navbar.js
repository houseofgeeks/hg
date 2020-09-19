import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import circle from "./semi-circle.png";

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
  function openNav() {
    document.getElementById("sidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
  return (
    <div>
      <div id="sidenav">
        <span className="closebtn" type="button" onClick={closeNav}>
          &times;
        </span>
        <ul className="navbar-nav">
          <Link to="/" className="navLink">
            <li
              className={active === "home" ? "nav-item active" : "nav-item"}
              onClick={() => {
                setActive("home");
                closeNav();
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
                closeNav();
              }}
            >
              Event
            </li>
          </Link>

          <Link to="/community" className="navLink">
            <li
              className={
                active === "community" ? "nav-item active " : "nav-item "
              }
              onClick={() => {
                setActive("community");
                closeNav();
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
                closeNav();
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
                closeNav();
              }}
            >
              Sponsors
            </li>
          </Link>
        </ul>
      </div>

      <span type="button" onClick={openNav} className="hamburger">
        &#9776;
      </span>
      <img src={circle} alt="circle" id="semi-circle"></img>
    </div>
  );
}

export default Navbar;
