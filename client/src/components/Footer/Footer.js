import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Hog from './img/hog.png';

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
                  <a className=" btn text-white" rel="noopener noreferrer" href="https://"><i  className="iconer fab fa-linkedin fa-3x"></i></a>
                  <a className=" btn text-white" rel="noopener noreferrer" href="https://github.com/houseofgeeks"><i  className=" iconer fab fa-github fa-3x"></i></a>
                  <a className=" btn text-white" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info"><i  className="iconer fas fa-envelope fa-3x"></i></a>
                  <a className=" btn text-white" rel="noopener noreferrer" href="https://www.facebook.com/search/top?q=house%20of%20geeks%20-%20technical%20society%20of%20iiit%20ranchi"><i  className="iconer fab fa-facebook fa-3x"></i></a>
                  <a className=" btn text-white" rel="noopener noreferrer" href="https://www.instagram.com/hg.iiitranchi/"><i  className="iconer fab fa-instagram fa-3x"></i></a>
                  <a className=" btn text-white" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvbh6phGLwpOnoM8g_GwlmQ"><i  className="iconer fab fa-youtube fa-3x"></i></a>
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
                        <a className="  text-white"  href="https://">Home</a><br></br>
                        <a className="  text-white"  href="https://">About</a><br></br>
                        <a className="  text-white"  href="https://">Socities</a><br></br>
                        <a className="  text-white"  href="https://">Projects</a><br></br>
                        <a className="  text-white"  href="http://iiitranchi.ac.in/">IIITRanchi</a>
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
                <div  className="col-2 col-sm-1 "><button id="dev" className=" btn text-white " data-toggle="modal" data-target="#exampleModal"><i className="iconer fas fa-laptop-code fa-2x"></i><small>Developers</small></button></div>
                <div className="col-6 col-sm-10 text-center">
                   <hr id="footer-hr"></hr>
                   <p className="text-white ">House Of Geeks © Copyright 2020 </p>
                </div>
                <div className="col-2 col-sm-1"><a id="up" className=" btn text-white " rel="noopener noreferrer" href="https://"><i className="iconer fas fa-chevron-circle-up fa-2x" id="to-top" onClick={window.scrollTo({top:0,behavior:'smooth'})}></i><br></br><small>Back to Top</small></a></div>
            </div>
        </div>
        
   </footer>
   {/* Footer Ends here */}
  </div>
  );
}

export default Footer;
