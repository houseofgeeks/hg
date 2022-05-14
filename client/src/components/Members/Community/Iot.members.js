import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import { IotMembersLists as iotLists } from './IotMembersList.js';


function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function IotMembers() {


      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);


      const renderedItems = iotLists.map((iotList, index) => {

            return (<div className="iot-members" key={iotList.id}>
                  <div className="cp-img-div">
                        <img className="cp-img" src={iotList.img} alt="cpm" style={{height:"35vw"}}/>
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
      return (windowDimensions.width > 990 ? (<div className="iot-members">
            <hr className="header-line-top" />
            <h1 className="community-header">
                  Robotics And IoT Community Members
            </h1>
            <hr className="header-line" />
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={iotLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={iotLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{iotLists[0].name}</h3>
                                    <h5 className="member-position">{iotLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + iotLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={iotLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={iotLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{iotLists[1].name}</h3>
                                    <h5 className="member-position">{iotLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + iotLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={iotLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={iotLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{iotLists[2].name}</h3>
                                    <h5 className="member-position">{iotLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={iotLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + iotLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>
      </div>) : (<div className="iot-members">
            <hr className="header-line-top" />
            <h1 className="community-header">
            Robotics And IoT Community Members
            </h1>
            <hr className="header-line" />
            {renderedItems}
      </div>
      ));
}

export default IotMembers;
