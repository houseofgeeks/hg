import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from "../img/github-brands.svg";
import {ReactComponent as LinkedIn} from "../img/linkedin-brands.svg";
import {ReactComponent as Email} from "../img/mail.svg";
import {MlMembersLists as mlLists} from './MlMembersList.js';
import planet from "../img/planet_2.svg";

function MachineLearningMembers() {
      const renderedItems = mlLists.map((mlList, index) => {

            return (<div className="cp-members">
                  <div className="cp-img-div">
                        <img className="cp-img" src={mlList.img} alt="cpm"/>
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
      return (<div className="machine-learning-members">
            <hr className="header-line-top"/>

            <h1 className="community-header">
                  Machine Learning Community Members
            </h1>
            <hr className="header-line"/>
            <img src={planet} className="planet-img-member-ml" alt="planet"/> {renderedItems}
      </div>);
}

export default MachineLearningMembers;
