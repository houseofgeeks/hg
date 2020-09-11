import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import hogLogo from './HOG_LOGO.png';
import { ReactComponent as Search } from './search-logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState('Home');
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
                            <li className={(active==='Home')?"nav-item active":"nav-item "}
                            onClick={() => setActive('Home')}>
                                Home
                            </li>
                        </Link>

                        <Link to="/event" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Event')?"nav-item  active":"nav-item "}
                             onClick={() => setActive('Event')}>
                                Events
                            </li>
                        </Link>

                        <Link to ="/community" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Community')?"nav-item  active":"nav-item "}
                            onClick={() => setActive('Community')}>
                                Community
                            </li>
                        </Link>

                        <Link to ="/members" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Members')?"nav-item active":"nav-item "}
                            onClick={() => setActive('Members')}>
                                Members
                            </li>
                        </Link>

                        <Link to ="/sponsors" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Sponsors')?"nav-item active":"nav-item"}
                            onClick={() => setActive('Sponsors')}>
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
