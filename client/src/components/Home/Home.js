import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import shadow from './blue_blur.png';
function Home() {
  return (
    <div className="home-component">
      <img className="lander-img img-fluid" src={shadow} alt="lander"/>
    </div>
  );
}

export default Home;
