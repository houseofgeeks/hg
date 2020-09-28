import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event/Event';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-section container">
      <div id="about-us">
        About House of Geeks
      </div>
      <div className="box">
        <div className="title">
          About Us
        </div>
        <div className="content">
          House of Geeks is the Technical Society of Indian Institute of Information Technology,
          Ranchi. Gravity is not just a force, it is the tendency of matter to move towards 
          where the time flows slower. We believe that collaborating, mending together 
          minds to make something phenomenal is time travel in itself!
        </div>
        <Event />
      </div>
    </div>
  );
}

export default AboutUs;
