import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Hog from './img/hog.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Linkedin } from './img/linkedin-brands.svg';
import { ReactComponent as Github } from './img/github-brands.svg';
import { ReactComponent as Mail } from './img/envelope-solid.svg';
import { ReactComponent as Insta } from './img/instagram-brands.svg';
import { ReactComponent as Facebook } from './img/facebook-brands.svg';
import { ReactComponent as Youtube } from './img/youtube-brands.svg';
import { ReactComponent as Developer } from './img/dev.svg';
import { ReactComponent as Up } from './img/up.svg';
 

function Footer() {
  return (
    <div className="footer-component">
      {/* Contact Us Section Starts Here */}
      <div className="container">
         <div className="row">
           <div className="col-12 text-center text-white my-3">
             <hr></hr>
             <h3> Contact Us</h3>
             <div className="mt-5 mb-3">
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://"><Linkedin className="icons"/></a>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/houseofgeeks"><Github className="icons"></Github></a>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info"><Mail className="icons"></Mail></a>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hG.iiitranchi"><Facebook className="icons"></Facebook></a>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hg.iiitranchi/"><Insta className="icons"></Insta></a>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvbh6phGLwpOnoM8g_GwlmQ"><Youtube className="icons"></Youtube></a>
             </div>
           </div>
         </div>
      </div>
      {/* Contact Us Section Ends here */}
    
    {/* Footer starts here */}
    <footer className="footer pb-0">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-3 offset-md-1 links">
                        <h5 className="font-weight-bold">Links</h5>
                        <Link className="text-white" to="/">Home</Link><br></br>
                        <Link className="text-white" to="/event">Events</Link><br></br>
                        <Link className="text-white" to="/community">Community</Link><br></br>
                        <Link className="text-white" to="/members">Members</Link><br></br>
                        <a className="text-white"  target="_blank"  rel="noopener noreferrer" href="http://iiitranchi.ac.in/">IIITRanchi</a>
                </div>
                <div className="col-12 col-md-4 links">
                    <hr className="d-md-none"></hr>
                    <h5 className="font-weight-bold">Our Address</h5>
                    <address>
                        <ul className="list-unstyled">
                            <li className="institute-address">Indian Institute of Information Technology,&nbsp;Ranchi</li>
                            <li className="institute-address">Sirkha Toli, Kali Nagar, Namkum, </li>
                            <li className="institute-address">Ranchi, Jharkhand 834010</li>
                            <li className="institute-address">Tel : 123-24578</li>
                            <li className="institute-address">Mail : <a className="footer-a" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info">iiitranchi@contact.info</a></li>
                        </ul><br></br>
		                </address>
                </div>
                {/* HG logo will be rendered only on screen-width greater than 768px */}
                <div className="col-12 col-md-4 d-none d-md-block"><img src={Hog} className="logo" alt="HG logo"></img></div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row justify-content-center mt-2 mb-0 pt-3">
                <div  className="col-2 col-sm-1 "><button id="dev" className=" btn text-white " data-toggle="modal" data-target="#exampleModal"><Developer className="icon-small"></Developer><small>Developers</small></button></div>
                <div className="col-6 col-sm-10 text-center">
                   <hr id="footer-hr"></hr>
                   <p className="text-white ">House Of Geeks © Copyright 2020 </p>
                </div>
                <div className="col-2 col-sm-1"><a id="up" className=" btn text-white " rel="noopener noreferrer" href="#top" onClick={window.scrollTo({top:0,behavior:'smooth'})}><Up className="icon-small"></Up><br></br><small className="d-block d-sm-none">Top</small><small className="d-none d-sm-block">Back to Top</small></a></div>
            </div>
        </div>
        
   </footer>
   {/* Footer Ends here */}
  </div>
  );
}

export default Footer;
