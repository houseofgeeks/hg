import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import LandingPage from './LandingPage/LandingPage';
import Notice from './Notice/Notice';
import CommunitySection from './CommunitySection/CommunitySection';
import AboutUs from './AboutUs/AboutUs';
import PartnersSection from './PartnersSection/PartnersSection';
import shadow from './blue_blur.png';

function Home() {
  return (
    <div className="home-component">
      <img className="lander-img img-fluid" src={shadow} alt="lander"/>
      <LandingPage />
      <AboutUs />
      <Notice />
      <CommunitySection />
      <PartnersSection />
    </div>
    );
}

export default Home;
