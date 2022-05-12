import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompetitiveCoding.members.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import planet from "../img/planet_2.svg";

import { CpMembersLists as cpLists } from './CpMembersList.js';

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}


function CompetitiveCodingMembers() {

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);


      return (windowDimensions.width > 990 ? (<div className="competitive-coding-members">
            <hr className="header-line-top" />
            <h1 className="community-header">
                  Competitive Coding Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-web" alt="planet" />
            <img src={planet} className="planet-img-member-cp-1" alt="planet" />

            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={cpLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={cpLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{cpLists[0].name}</h3>
                                    <h5 className="member-position">{cpLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={cpLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={cpLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{cpLists[1].name}</h3>
                                    <h5 className="member-position">{cpLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={cpLists[3].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={cpLists[3].img} alt="cpm" />
                                    <h3 className="member-name">{cpLists[3].name}</h3>
                                    <h5 className="member-position">{cpLists[3].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[3].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[3].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpLists[3].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={cpLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={cpLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{cpLists[2].name}</h3>
                                    <h5 className="member-position">{cpLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={cpLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + cpLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>



      </div>) : (
            <div className="competitive-coding-members">
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
                              })
                        }

                  </div>
            </div>
      ));

}

export default CompetitiveCodingMembers;


