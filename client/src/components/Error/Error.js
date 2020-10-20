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
import {ReactComponent as Github} from "../Footer/img/github-brands.svg";
import {ReactComponent as Insta} from "../Footer/img/instagram-brands.svg";
import {ReactComponent as Facebook} from "../Footer/img/facebook-brands.svg";
import {ReactComponent as Youtube} from "../Footer/img/youtube-brands.svg";
import {ReactComponent as LinkedIn} from "../Footer/img/linkedin-brands.svg";

const Error = () => {
    return (
        <div>
        <div className="error-component">
            <div className="container-fluid mt-5 mx-auto">
                <div className="stars row">
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
      <div className="container-fluid footer">
                  <div className="row">
                  <div className="col-12 col-lg-4  text-center text-white">
                              <p>WebDev Team House Of Geeks</p>
                  </div>
                  <div className="col-12 col-lg-4  text-center text-white">
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hg.iiitranchi/">
                                    <Insta className="icon"></Insta>
                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvbh6phGLwpOnoM8g_GwlmQ">
                                    <Youtube className="icon"></Youtube>
                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/houseofgeeks">
                                    <Github className="icon"></Github>
                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hG.iiitranchi">
                                    <Facebook className="icon"></Facebook>
                        </a>

                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/hgiiitranchi/">
                                    <LinkedIn className="icon fa-7x"></LinkedIn>
                        </a>
                  </div>
                  <div className="col-12 col-lg-4  text-center text-white">
                              <p>© HouseOfGeeks,IIIT Ranchi</p>
                  </div>

                  </div>
            </div>
      </div>
    );
}
export default Error;