import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";
import {ElcMembersLists as elcLists} from './ElcMembersList.js';
import planet from "../img/planet_2.svg";

function ElectronicsMembers() {
      const renderedItems = elcLists.map((elcList, index) => {

            return (<div className="elc-members">
                  <div className="cp-img-div">
                        <img className="cp-img" src={elcList.img} alt="cpm"/>
                        <h3 className="member-name">{elcList.name}</h3>
                        <h5 className="member-position">{elcList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + elcList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (<div className="electronics-members">
            <hr className="header-line-top"/>

            <h1 className="community-header">
                  Core Electronics Community Members
            </h1>
            <hr className="header-line"/>
            <img src={planet} className="planet-img-member-cp" alt="planet"/> {renderedItems}
      </div>);
}

export default ElectronicsMembers;
