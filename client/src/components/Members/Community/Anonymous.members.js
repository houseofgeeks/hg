import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from "../img/github-brands.svg";
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";

import {AnonymousMembersLists as anonLists} from './AnonymousMembersList.js';

function AnonymousMembers() {

      const renderedItems = anonLists.map((anonList, index) => {

            return (<div className="anon-members" key={anonList.id}>
                  <div className="cp-img-div">
                        <img className="cp-img" src={anonList.img} alt="cpm"/>
                        <h3 className="member-name">{anonList.name}</h3>
                        <h5 className="member-position">{anonList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={anonList.linkedin}>
                              {anonList.linkedin && <LinkedIn className="icons-members"></LinkedIn>}

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={anonList.github}>
                              {anonList.github && <Github className="icons-members"></Github>}

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + anonList.mail}>
                              {anonList.mail && <Email className="icons-members"></Email>}

                        </a>

                  </div>
            </div>)

      });
      return (<div className="anonymous-members">
            <hr className="header-line-top"/>
            <h1 className="community-header">
                  Team Anonymous Members
            </h1>
            <hr className="header-line"/> {renderedItems}
      </div>);
}

export default AnonymousMembers;
