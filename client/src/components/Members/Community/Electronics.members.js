import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import { ElcMembersLists as elcLists } from './ElcMembersList.js';
import planet from "../img/planet_2.svg";

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function ElectronicsMembers() {

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);

      const renderedItems = elcLists.map((elcList, index) => {

            return (<div className="elc-members" key={elcList.id}>
                  <div className="cp-img-div">
                        <img className="cp-img" src={elcList.img} alt="cpm" />
                        <h3 className="member-name">{elcList.name}</h3>
                        <h5 className="member-position">{elcList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcList.github}>
                              <Github className="icons-members"></Github>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + elcList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (window.innerWidth > 1000 ? (<div className="electronics-members">
            <hr className="header-line-top" />

            <h1 className="community-header">
                  Core Electronics Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-cp" alt="planet" />
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={elcLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={elcLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{elcLists[0].name}</h3>
                                    <h5 className="member-position">{elcLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + elcLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={elcLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={elcLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{elcLists[1].name}</h3>
                                    <h5 className="member-position">{elcLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + elcLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={elcLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={elcLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{elcLists[2].name}</h3>
                                    <h5 className="member-position">{elcLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={elcLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + elcLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>
      </div>) : (
            <div className="electronics-members">
                  <hr className="header-line-top" />

                  <h1 className="community-header">
                        Core Electronics Community Members
                  </h1>
                  <hr className="header-line" />
                  <img src={planet} className="planet-img-member-cp" alt="planet" />
                  {renderedItems}
            </div>
      ));
}

export default ElectronicsMembers;
