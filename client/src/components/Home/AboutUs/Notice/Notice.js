import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import planet from './planet.svg';
// import ellipse1 from './Ellipse 1.svg';
// import ellipse2 from './Ellipse 2.svg';
// import line from './Rectangle 1.svg';
import './Notice.css';

function Notice() {
  return (
    <div className="notice-section">
      <div className="notice-title">
          From the Geeks' Satellite..
        </div>
        <div className="notice-content">
          <div className="title">
            Recieving signals... <span className="decrypting">Decrypting...</span> 
            <span className="latest-news">Latest News...</span>
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
        {/* <div className="union">
          <img className="ellipse-1" src={ellipse1} alt="ellipse-1" />
          <img className="ellipse-2" src={ellipse2} alt="ellipse-2" />
          <img className="line" src={line} alt="line" />
        </div> */}
        <div className="planet">
          <img src={planet} className="planet-img" alt="planet" />
        </div>
      </div>
  );
}

export default Notice;
