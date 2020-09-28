import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import LandingPage from "./LandingPage/LandingPage";
import CommunitySection from "../Community/Community";
import AboutUs from "./AboutUs/AboutUs";
import PartnersSection from "./PartnersSection/PartnersSection";
import Contact from "../Footer/contactUs";

function Home() {
  return (
    <div className="home-component">
      <LandingPage />
      <AboutUs />
      <CommunitySection />
      <PartnersSection />
      <div className="container-fluid star-background">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
