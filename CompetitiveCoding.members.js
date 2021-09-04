import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompetitiveCoding.members.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import planet from "../img/planet_2.svg";

import { CpMembersLists as cpLists } from './CpMembersList.js';

function CompetitiveCodingMembers() {
      return (<div className="competitive-coding-members">
            <hr className="header-line-top" />
            <h1 className="community-header">
                  Competitive Coding Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-web" alt="planet" />
            <img src={planet} className="planet-img-member-cp-1" alt="planet" />

            <div className="cp-members row ">
                  {
                        cpLists.map((cpList, index) => {

                              const active = index

                              if (active === 0) {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={cpList.id}>{/*formerly col-lg-12 for delta-type design*/}

                                          <img className="cp-img" src={cpList.img} alt="cpm" />
                                          <h3 className="member-name">{cpList.name}</h3>
                                          <h5 className="member-position">{cpList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpList.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpList.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpList.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              }
                              else {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={cpList.id}>

                                          <img className="cp-img" src={cpList.img} alt="cpm"/>
                                          <h3 className="member-name">{cpList.name}</h3>
                                          <h5 className="member-position">{cpList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpList.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpList.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpList.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              }
                        })
                  }

            </div>
      </div>);

}

export default CompetitiveCodingMembers;