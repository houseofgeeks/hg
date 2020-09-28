import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Error.css'
import astronaut from './Images/astronaut.svg'
import four from './Images/4.svg';
import zero from './Images/0.svg';
import error from './Images/error.svg'
import not_found from './Images/page-not-found.svg'
import planet from './Images/planet.svg'

const Error = () => {
    return (
        <div className="error-component">
            <div className="container-fluid mt-5 mx-auto">
                <div className="stars">
                    <NavLink className="btn-go-home" to="/" >HOME</NavLink>
                    <img className="error" src={error} alt="error" width="200px" />
                    <div className="error_message mx-auto">
                        <img className="image-4" src={four} alt="error" />
                        <img className="image-0" src={zero} alt="error" />
                        <img className="image-404" src={four} alt="error" />
                    </div>
                    <div className="page_not_found" >
                        <img className="not_found" src={not_found} alt="page not found" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src={astronaut} alt="astrounet" />
                    </div>
                    <div className="planet" >
                        <img className="object_planet" src={planet} alt="planet" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Error;