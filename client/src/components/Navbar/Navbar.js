import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import hogLogo from './HOG_LOGO.png';
import { ReactComponent as Search } from './search-logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const currentloc = String(window.location);                             //Gets current URL
    let currenttab = currentloc.substring(currentloc.lastIndexOf("/")+1);   //Gets current element from navbar
    
    if(currenttab[currenttab.length-1] === '?')                        //When search bar is used, preventing bug of nothing being active in navbar
    {
        currenttab = currenttab.substring(0,currenttab.length-1);           //Removing ? sign when search bar used
    }    
    
    if(currenttab.length === 0 ){                                           //When visiting home section
        currenttab = "home";
    }
    const [active, setActive] = useState(currenttab);
    return (
        <div className="navbar-component">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top   bg-nav">

                <Link to ="/" id="navLink">
                    <div className="navbar-brand "> <img className="nav-logo" src={hogLogo} alt="logo"/></div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto text-center">

                        <Link to ="/" id="navLink">
                            <hr className="d-md-none" />

                            <li className={(active==='home')?"nav-item active":"nav-item"} 
                            onClick={() => setActive('home')}>
                                Home
                            </li>
                        </Link>

                        <Link to="/event" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Event')?"nav-item  active":"nav-item "}
                             onClick={() => setActive('Event')}>
                                Events
                            <hr className="d-md-none" /> 
                            <li className={(active==='event')?"nav-item active":"nav-item"}
                             onClick={() => setActive('event')}>
                                Event
                            </li>
                        </Link>

                        <Link to ="/community" id="navLink">
               
                            <hr className="d-md-none" /> 
                            <li className={(active==='community')?"nav-item active":"nav-item"} 
                            onClick={() => setActive('community')}>
                              Community
                            </li>
                        </Link>

                        <Link to ="/members" id="navLink">

                            <hr className="d-md-none" /> 
                            <li className={(active==='members')?"nav-item active":"nav-item"} 
                            onClick={() => setActive('members')}>
                                Members
                            </li>
                        </Link>

                        <Link to ="/sponsors" id="navLink">
                          
                            <hr className="d-md-none" /> 
                            <li className={(active==='sponsors')?"nav-item active":"nav-item"} 
                            onClick={() => setActive('sponsors')}>

                                Sponsors
                            </li>
                        </Link>

                    </ul>
                        <form className="form-inline ">
                              <input className="form-control  search-bar" type="search" placeholder="Search" aria-label="Search"/>
                              <i><Search className="search-icon"/></i>
                        </form>

                </div>
            </nav>
        </div>
    )
}
   
export default Navbar;
