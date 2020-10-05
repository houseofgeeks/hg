import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnersSection.css';
import {PartnersList as partners} from './PartnersList.js';

const PartnersSection = () => {
      return (<div className="partners-section container">
            <div className="partners-box">
                  <div className="partners-title">
                        Partners and Sponsors
                  </div>
                  <div className="partners-img row ">
                        {
                              partners.map((partner, idx) => {
                                    return (<div key={`${idx}`} className="partners-col-1 col-lg-4 col-md-12">
                                          <div className="logo-container ">

                                                <img className="partners-logo" src={`${partner.img}`} alt="partners"/>
                                                <div className="logo-hover">
                                                      <Link className="partners-link" target="_blank" to={`${partner.link}`}>
                                                            <h2 className="logo-name">
                                                                  {partner.name}

                                                            </h2>
                                                      </Link>
                                                </div>
                                                <div className="sponsors-logo-hover">
                                                      <h2 className="logo-name">
                                                            {partner.name}

                                                      </h2>

                                                </div>

                                          </div>

                                    </div>)
                              })
                        }
                  </div>
            </div>
      </div>);
}
export default PartnersSection;
