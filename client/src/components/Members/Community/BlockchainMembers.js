import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompetitiveCoding.members.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import planet from "../img/planet_2.svg";
import { BlockchainMembers as bcMembers } from './BlockchainMembersList'

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function BlockchainMembers() {

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
                  Cybersecurity, Cryptography And Blockchain Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-web" alt="planet" />
            <img src={planet} className="planet-img-member-cp-1" alt="planet" />

            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={bcMembers[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={bcMembers[0].img} alt="cpm" />
                                    <h3 className="member-name">{bcMembers[0].name}</h3>
                                    <h5 className="member-position">{bcMembers[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMembers[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={bcMembers[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={bcMembers[1].img} alt="cpm" />
                                    <h3 className="member-name">{bcMembers[1].name}</h3>
                                    <h5 className="member-position">{bcMembers[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMembers[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={bcMembers[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={bcMembers[2].img} alt="cpm" />
                                    <h3 className="member-name">{bcMembers[2].name}</h3>
                                    <h5 className="member-position">{bcMembers[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMembers[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={bcMembers[3].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={bcMembers[3].img} alt="cpm" />
                                    <h3 className="member-name">{bcMembers[3].name}</h3>
                                    <h5 className="member-position">{bcMembers[3].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[3].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[3].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMembers[3].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={bcMembers[4].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={bcMembers[4].img} alt="cpm" />
                                    <h3 className="member-name">{bcMembers[4].name}</h3>
                                    <h5 className="member-position">{bcMembers[4].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[4].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMembers[4].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMembers[4].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>


      </div>) : (<div className="competitive-coding-members">
            <hr className="header-line-top" />
            <h1 className="community-header">
            Cybersecurity, Cryptography And Blockchain Community Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-web" alt="planet" />
            <img src={planet} className="planet-img-member-cp-1" alt="planet" />

            <div className="cp-members row ">
                  {
                        bcMembers.map((bcMember, index) => {

                              const active = index

                              if (active === 0) {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={bcMember.id}>{/*formerly col-lg-12 for delta-type design*/}
{/* style={{height:"35vw"}} */}
                                          <img className="cp-img" src={bcMember.img} alt="cpm" />
                                          <h3 className="member-name">{bcMember.name}</h3>
                                          <h5 className="member-position">{bcMember.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMember.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMember.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMember.mail}>
                                                <Email className="icons-members"></Email>

                                          </a>

                                    </div>)
                              }
                              else {
                                    return (<div className="cp-img-div col-lg-6 col-md-12" key={bcMember.id}>
{/* style={{height:"35vw"}} */}
                                          <img className="cp-img" src={bcMember.img} alt="cpm" />
                                          <h3 className="member-name">{bcMember.name}</h3>
                                          <h5 className="member-position">{bcMember.position}</h5>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMember.linkedin}>
                                                <LinkedIn className="icons-members"></LinkedIn>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={bcMember.github}>
                                                <Github className="icons-members"></Github>

                                          </a>
                                          <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + bcMember.mail}>
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

export default BlockchainMembers;


