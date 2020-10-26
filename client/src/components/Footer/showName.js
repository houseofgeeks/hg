import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import { ReactComponent as Github } from "./img/github-brands.svg";
import { ReactComponent as Twitter } from "./img/twitter-brands.svg";
import { ReactComponent as Mail } from "./img/envelope-solid.svg";

function ShowName({ prop }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
    // eslint-disable-next-line
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(prop);
    const jsonData = await response.json();
    setUserInfo(jsonData);
  };

  return (
    <div className="text-center text-white">
      <h3>{userInfo.name}</h3>
      <div className="row icon-row">
        <div className="col-lg-12 text-center">
          {userInfo.twitter_username && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/" + userInfo.twitter_username}
            >
              <Twitter className="icon"></Twitter>
            </a>
          )}
          {userInfo.mail && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto:" + userInfo.mail}
            >
              <Mail className="icon"></Mail>
            </a>
          )}
          <a target="_blank" rel="noopener noreferrer" href={userInfo.html_url}>
            <Github className="icon"></Github>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShowName;
