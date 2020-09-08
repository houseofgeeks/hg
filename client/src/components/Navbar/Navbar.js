import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState('Home');
    return (
        <div className="Navbar-component">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to ="/" id="navLink">
                    <div className="navbar-brand">House of Geeks</div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto text-center">

                        <Link to ="/" id="navLink">
                            <hr className="d-md-none" />
                            <li className={(active==='Home')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('Home')}>
                                Home
                            </li>
                        </Link>

                        <Link to="/event" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='Event')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"}
                             onClick={() => setActive('Event')}>
                                Events
                            </li>
                        </Link>

                        <Link to ="/community" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='Community')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('Community')}>
                                Community
                            </li>
                        </Link>

                        <Link to ="/members" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='Members')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('Members')}>
                                Members
                            </li>
                        </Link>

                        <Link to ="/sponsors" id="navLink">
                            <hr className="d-md-none" /> 
                            <li className={(active==='Sponsors')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} 
                            onClick={() => setActive('Sponsors')}>
                                Sponsors
                            </li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;