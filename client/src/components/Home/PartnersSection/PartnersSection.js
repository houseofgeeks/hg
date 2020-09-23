import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnersSection.css';
import {PartnersList} from './PartnersList.js';

class PartnersSection extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  partners: PartnersList

            }
      }

      render() {
            const display = this.state.partners.map((partner) => {
                  return (<div className="partners-col-1 col-lg-6 col-md-12">

                        <img className="partners-logo" src={`${partner.img}`} alt="partners"/>
                        <h2 className="logo-name">
                              {partner.name}
                        </h2>
                  </div>);
            });
            return (<div className="partners-section container">

                  <div className="partners-box">
                        <div className="partners-title">
                              Partners and Sponsors
                        </div>
                        <div className="partners-img row">
                              {display}

                        </div>

                  </div>

            </div>);
      }
}

export default PartnersSection;
