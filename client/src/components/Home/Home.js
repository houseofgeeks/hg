import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
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
    </div>
  );
}

export default Home;
