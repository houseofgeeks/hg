import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from "../img/github-brands.svg";
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";
import {IotMembersLists as iotLists} from './IotMembersList.js';

function IotMembers() {
      const renderedItems = iotLists.map((iotList, index) => {

            return (<div className="iot-members">
                  <div className="cp-img-div">
                        <img className="cp-img" src={iotList.img} alt="cpm"/>
                        <h3 className="member-name">{iotList.name}</h3>
                        <h5 className="member-position">{iotList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotList.github}>
                              <Github className="icons-members"></Github>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + iotList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (<div className="iot-members">
            <hr className="header-line-top"/>
            <h1 className="community-header">
                  IoT Community Members
            </h1>
            <hr className="header-line"/> {renderedItems}
      </div>);
}

export default IotMembers;
