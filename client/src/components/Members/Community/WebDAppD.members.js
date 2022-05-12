import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import { WebMembersLists as webLists } from './WebMembersList.js';
import planet from "../img/planet_2.svg";

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}


function WebDAppDMembers() {


      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);


      return (windowDimensions.width > 990 ? (<div className="electronics-members">
            <hr className="header-line-top" />

            <h1 className="community-header">
                  Core Electronics Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-cp" alt="planet" />
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={webLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={webLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{webLists[0].name}</h3>
                                    <h5 className="member-position">{webLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + webLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <div className="elc-members" key={webLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={webLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{webLists[1].name}</h3>
                                    <h5 className="member-position">{webLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + webLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={webLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={webLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{webLists[2].name}</h3>
                                    <h5 className="member-position">{webLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={webLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + webLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>
      </div>) : (<div className="head-div">
            <hr className="header-line-top" />
            <h1 className="community-header">
                  Web and App Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-web" alt="planet" />

            <div className="head-members row ">
                  {
                        webLists.map((webList, index) => {

                              const active = index

                              if (active === 0) {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={webList.id}>{/*formerly col-lg-12 for delta-type design*/}

                                          <img className="cp-img" src={webList.img} alt="cpm" />
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

                                          <img className="cp-img" src={webList.img} alt="cpm" />
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
      </div>));

}

export default WebDAppDMembers;
