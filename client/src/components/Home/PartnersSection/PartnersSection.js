import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnersSection.css';
import coding from './coding.png';

function PartnersSection() {
      return (<div className="partners-section container">

            <div className="partners-box">
                  <div className="partners-title">
                        Partners and Sponsors
                  </div>
                  <div className="partners-img row">
                        <div className="partners-col-1 col-lg-6 col-md-12">
                              <img className="partners-logo" src={coding} alt="coding-blocks"/>
                        </div>
                        <div className="partners-col-2 col-lg-6 col-md-12">

                              <img className="partners-logo" src={coding} alt="coding-blocks"/>
                        </div>

                  </div>
                  <div className="partners-img row">
                        <div className="partners-col-1 col-lg-6 col-md-12">
                              <img className="partners-logo" src={coding} alt="coding-blocks"/>
                        </div>
                        <div className="partners-col-2 col-lg-6 col-md-12">

                              <img className="partners-logo" src={coding} alt="coding-blocks"/>
                        </div>

                  </div>
            </div>

      </div>);
}

export default PartnersSection;
