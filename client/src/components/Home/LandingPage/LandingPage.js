import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import asteroids from './asteroids.svg';
import writeup from './writeup.svg';
import surface from './surface.svg';
import astronaut from './astronaut.svg';

function LandingPage() {
  return (
    <div className="landing-page-section">
      <div className="asteroids">
        <img className="img-fluid asteroids-img" src={asteroids} alt="asteroids" />
      </div>
      <div className="writeup">
        <img className="img-fluid writeup-img" src={writeup} alt="House of Geeks"/>
      </div>
      <div className="surface">
        <img className="surface-img" src={surface} alt="surface"/>
      </div>
      <div className="astronaut">
        <img className="astronaut-img" src={astronaut} alt="astronaut"/>
      </div>
    </div>
  );
}

export default LandingPage;
