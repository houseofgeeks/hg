import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";

import {EventMembersLists as evnLists} from './EventMembersList.js';

function EventMembers() {

      const renderedItems = evnLists.map((evnList, index) => {

            return (<div className="evn-members">
                  <div className="cp-img-div">
                        <img className="cp-img" src={evnList.img} alt="cpm"/>
                        <h3 className="member-name">{evnList.name}</h3>
                        <h5 className="member-position">{evnList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={evnList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>

                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + evnList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (<div className="creaxn-members">
            <hr className="header-line-top"/>
            <h1 className="community-header">
                  Team Event Members
            </h1>
            <hr className="header-line"/> {renderedItems}
      </div>);
}

export default EventMembers;
