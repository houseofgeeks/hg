import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Head.members.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import planet from "../img/planet_2.svg";

import { HeadMembersLists as headLists } from './HeadMembersList.js';

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function HeadMembers() {


      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);

      return (windowDimensions.width > 990 ? (<div className="head-div">
            <h1 className="community-header-head">
                  Members
            </h1>
            <hr className="header-line" />

            <img src={planet} className="planet-img-member" alt="planet" />

            <img src={planet} className="planet-img-member-1" alt="planet" />
            <img src={planet} className="planet-img-member-2" alt="planet" />
            <img src={planet} className="planet-img-member-3" alt="planet" />

            <div className="head-members row ">
                  {
                        headLists.map((headList, index) => {

                              const active = index

                              if (active < 3) {
                                    return (<div className="cp-img-div col-lg-12 col-md-12" key={headList.id}>

                                          <img className="cp-img" src={headList.img} alt="cpm" />
                                          <h3 className="member-name">{headList.name}</h3>
                                          <h5 className="member-position">{headList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.linkedin}>
                                                {headList.linkedin && <LinkedIn className="icons-members"></LinkedIn>}
                                          </a>

                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.github}>
                                                {headList.github && <Github className="icons-members"></Github>}
                                          </a>

                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + headList.mail}>
                                                {headList.mail && <Email className="icons-members"></Email>}

                                          </a>

                                    </div>)
                              } else {
                                    return (<div className="cp-img-div col-lg-4 col-md-12" key={headList.id}>

                                          <img className="cp-img" src={headList.img} alt="cpm" />
                                          <h3 className="member-name">{headList.name}</h3>
                                          <h5 className="member-position">{headList.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + headList.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              }
                        })
                  }

            </div>
      </div>): (
            <div className="head-div">
                  <h1 className="community-header-head">
                        Members
                  </h1>
                  <hr className="header-line" />

                  <img src={planet} className="planet-img-member" alt="planet" />

                  <img src={planet} className="planet-img-member-1" alt="planet" />
                  <img src={planet} className="planet-img-member-2" alt="planet" />
                  <img src={planet} className="planet-img-member-3" alt="planet" />

                  <div className="head-members row ">
                        {
                              headLists.map((headList, index) => {

                                    const active = index

                                    if (active < 3) {
                                          return (<div className="cp-img-div col-lg-12 col-md-12" key={headList.id}>
{/* style={{height:"35vw"}} */}
                                                <img className="cp-img" src={headList.img} alt="cpm" />
                                                <h3 className="member-name">{headList.name}</h3>
                                                <h5 className="member-position">{headList.position}</h5>
                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.linkedin}>
                                                      {headList.linkedin && <LinkedIn className="icons-members"></LinkedIn>}
                                                </a>

                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.github}>
                                                      {headList.github && <Github className="icons-members"></Github>}
                                                </a>

                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + headList.mail}>
                                                      {headList.mail && <Email className="icons-members"></Email>}

                                                </a>

                                          </div>)
                                    } else {
                                          return (<div className="cp-img-div col-lg-4 col-md-12" key={headList.id}>

                                                <img className="cp-img" src={headList.img} alt="cpm" />
                                                <h3 className="member-name">{headList.name}</h3>
                                                <h5 className="member-position">{headList.position}</h5>
                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.linkedin}>
                                                      <LinkedIn className="icons-members"></LinkedIn>

                                                </a>
                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={headList.github}>
                                                      <Github className="icons-members"></Github>

                                                </a>
                                                <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + headList.mail}>
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

export default HeadMembers;
