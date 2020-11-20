import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from "../img/github-brands.svg";
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";
import {WebMembersLists as webLists} from './WebMembersList.js';
import planet from "../img/planet_2.svg";

function WebDAppDMembers() {

      return (<div className="head-div">
            <hr className="header-line-top"/>
            <h1 className="community-header">
                  Web and App Community Members
            </h1>
            <hr className="header-line"/>
            <img src={planet} className="planet-img-member-web" alt="planet"/>

            <div className="head-members row ">
                  {
                        webLists.map((webList, index) => {

                              const active = index

                              if (active === 0) {
                                    return (<div className="cp-img-div col-lg-12 col-md-12" key={webList.id}>

                                          <img className="cp-img" src={webList.img} alt="cpm"/>
                                          <h3 className="member-name">{webList.name}</h3>
                                          <h5 className="member-position">{webList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={webList.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={webList.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + webList.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              } else {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={webList.id}>

                                          <img className="cp-img" src={webList.img} alt="cpm"/>
                                          <h3 className="member-name">{webList.name}</h3>
                                          <h5 className="member-position">{webList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={webList.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={webList.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + webList.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              }
                        })
                  }

            </div>
      </div>);

}

export default WebDAppDMembers;
