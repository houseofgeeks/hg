import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import planet from './planet.svg';
import union from './union.svg';
import mobilePlanet from './mobile-planet.svg';
import './Notice.css';

function Notice() {
  return (
    <div className="notice-section">
      <div className="notice-title">
          From the Geeks' Satellite..
        </div>
        <div className="notice-content">
          <div className="title">
            Recieving signals... <span className="decrypting"> Decrypting...</span> 
            <span className="latest-news"> Latest News...</span>
          </div>
          <div className="notice-list">
            <ul>
              <li>Notice title1</li>
              <li>Notice title2</li>
              <li>Notice title3</li>
              <li>Notice title4</li>
              <li>Notice title5</li>
              <li>Notice title6</li>
            </ul>
          </div>
        </div>
        <div className="planet">
          <img src={planet} className="planet-img" alt="planet" />
        </div>
        <div className="mobile-planet">
          <img src={mobilePlanet} className="mobile-planet-img" alt="mobile planet" />
        </div>
        <div className="union">
          <img src={union} className="union-img" alt="union"/>
        </div>
      </div>
  );
}

export default Notice;
