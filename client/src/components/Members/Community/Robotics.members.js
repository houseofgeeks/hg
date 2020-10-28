import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import {RobMembersLists as robLists} from './RobMembersList.js';
import planet from "../img/planet_2.svg";


function RoboticsMembers() {

      const renderedItems = robLists.map((robList,index) =>  {


      return (
      <div className="rob-members">
      <div className="cp-img-div">
      <img className="cp-img" src={robList.img} alt="cpm" />
      <h3 className="member-name">{robList.name}</h3>
      <h5 className="member-position">{robList.position}</h5>
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href={robList.linkedin}
            >
            <LinkedIn className="icons-members"></LinkedIn>

            </a>

            <a
             className="text-white"
             target="_blank"
             rel="noopener noreferrer"
             href={robList.github}
            >
            <Github className="icons-members"></Github>


            </a>
            <a
             className="text-white"
             target="_blank"
             rel="noopener noreferrer"
             href={"mailto:" + robList.mail}
            >
            <Email className="icons-members"></Email>


            </a>

      </div>
      </div>

      )



      });
        return (
          <div className="robotics-members">
      <hr className="header-line-top"/>
                <h1 className="community-header"> Robotics Community Members </h1>
      <hr className="header-line"/>
            <img
            src={planet}
            className="planet-img-member-rob"
            alt="planet"
            />
            {renderedItems}
          </div>
        );
}

export default RoboticsMembers;
