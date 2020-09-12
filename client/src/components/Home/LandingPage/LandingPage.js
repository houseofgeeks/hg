import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import asteroids from './asteroids.svg';
import writeup from './writeup.svg';

function LandingPage() {
  return (
    <div className="landing-page-section container-fluid">
      <div className="writeup">
        <img className="img-fluid asteroids" src={asteroids} alt="asteroids" />
        <img className="img-fluid writeup-img" src={writeup} alt="House of Geeks" />
      </div>
    </div>
  );
}

export default LandingPage;
