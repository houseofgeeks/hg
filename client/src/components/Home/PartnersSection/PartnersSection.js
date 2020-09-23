import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnersSection.css';
import {PartnersList as partners} from './PartnersList.js';

const PartnersSection = () => {
      return (
            <div className="partners-section container">
                  <div className="partners-box">
                        <div className="partners-title">
                              Partners and Sponsors
                        </div>
                        <div className="partners-img row">
                              {
                                    partners.map((partner, idx) => {
                                          return(
                                                <div className="partners-col-1 col-lg-6 col-md-12">
                                                      <img className="partners-logo" src={`${partner.img}`} alt="partners"/>
                                                      <h2 className="logo-name">
                                                            {partner.name}
                                                      </h2>
                                                </div>
                                          )     
                                    })
                              }
                        </div>
                  </div>
            </div>
      );
}
export default PartnersSection;
