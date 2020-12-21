import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from "../img/github-brands.svg";
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";
import planet from "../img/planet_2.svg";

import {CreaxnMembersLists as cxnLists} from './CreaxnMembersList.js';

function CreaxnMembers() {

      const renderedItems = cxnLists.map((cxnList, index) => {

            return (<div className="cxn-members" key={cxnList.id}>
                  <div className="cp-img-div">
                        <img className="cp-img" src={cxnList.img} alt="cpm"/>
                        <h3 className="member-name">{cxnList.name}</h3>
                        <h5 className="member-position">{cxnList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={cxnList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={cxnList.github}>
                              <Github className="icons-members"></Github>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cxnList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (<div className="creaxn-members">
            <hr className="header-line-top"/>
            <h1 className="community-header">
                  Team Creaxn Members
            </h1>
            <hr className="header-line"/>

            <img src={planet} className="planet-img-member-creaxn" alt="planet"/> {renderedItems}
      </div>);
}

export default CreaxnMembers;
