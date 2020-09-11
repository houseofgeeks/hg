import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
<<<<<<< HEAD
import LandingPage from './LandingPage/LandingPage';
import Notice from './Notice/Notice';
import CommunitySection from './CommunitySection/CommunitySection';
import AboutUs from './AboutUs/AboutUs';
import PartnersSection from './PartnersSection/PartnersSection';

function Home() {
  return (
    <div className="home-component">
      <h1>This is the Home page.</h1>
      <LandingPage />
      <AboutUs />
      <Notice />
      <CommunitySection />
      <PartnersSection />
=======
import shadow from './blue_blur.png';
function Home() {
  return (
    <div className="home-component">
      <img className="lander-img img-fluid" src={shadow} alt="lander"/>
>>>>>>> 1e9a8568958e0b1dd9e03ab4e46ef594ffaa3ef4
    </div>
  );
}

export default Home;
