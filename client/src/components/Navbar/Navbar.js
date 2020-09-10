import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './HGlogo.jpeg';

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <Link to ="/" id="navLink">
                    <div className="navbar-brand"><img src={logo} className="logo" alt = "HouseOfGeeks logo"/></div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto text-center">

                        <Link to ="/" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='home')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('home')}>
                                Home
                            </li>
                        </Link>

                        <Link to="/event" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='event')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"}
                             onClick={() => setActive('event')}>
                                Event
                            </li>
                        </Link>

                        <Link to ="/community" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='community')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('community')}>
                                Community
                            </li>
                        </Link>

                        <Link to ="/members" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='members')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('members')}>
                                Members
                            </li>
                        </Link>

                        <Link to ="/sponsors" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='sponsors')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('sponsors')}>
                                Sponsors
                            </li>
                        </Link>

                    </ul>
                    <form className="form-inline mx-3 px-3 ">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
