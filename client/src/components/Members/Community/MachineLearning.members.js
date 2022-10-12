import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import { MlMembersLists as mlLists } from './MlMembersList.js';
import planet from "../img/planet_2.svg";

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function MachineLearningMembers() {

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);
      const renderedItems = mlLists.map((mlList, index) => {

            return (<div className="cp-members" key={mlList.id}>
                  <div className="cp-img-div">
                        <img className="cp-img" src={mlList.img} alt="cpm" />
                        <h3 className="member-name">{mlList.name}</h3>
                        <h5 className="member-position">{mlList.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlList.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlList.github}>
                              <Github className="icons-members"></Github>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + mlList.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (windowDimensions.width > 1000 ? (<div className="machine-learning-members">
            <hr className="header-line-top" />

            <h1 className="community-header">
                  Machine Learning Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-ml" alt="planet" />
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={mlLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={mlLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{mlLists[0].name}</h3>
                                    <h5 className="member-position">{mlLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + mlLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={mlLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={mlLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{mlLists[1].name}</h3>
                                    <h5 className="member-position">{mlLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + mlLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={mlLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={mlLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{mlLists[2].name}</h3>
                                    <h5 className="member-position">{mlLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={mlLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + mlLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>
      </div>) : (
            <div className="machine-learning-members">
                  <hr className="header-line-top" />

                  <h1 className="community-header">
                        Machine Learning Community Members
                  </h1>
                  <hr className="header-line" />
                  <img src={planet} className="planet-img-member-ml" alt="planet" />
                  {renderedItems}
            </div>
      ));
}

export default MachineLearningMembers;
