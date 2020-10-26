import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import ShowName from "./showName";

function Modal() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(
      "https://api.github.com/repos/houseofgeeks/hg/contributors"
    );
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div
      className="modal fade "
      id="WebTeamModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl ">
        <div className="modal-content modal-back">
          <div className="modal-body row">
            <h5 className="text-pink col-12" id="exampleModalLabel">
              Contributors
            </h5>
            <p type="button" className="close-button" data-dismiss="modal">
              <span>x</span>
            </p>

            {userData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-12">
                <div className="contributor-container ">
                  <div className="image-container">
                    <img
                      className="contributor-image"
                      src={item.avatar_url}
                      alt="items"
                    />
                    <a
                      className=" image-hover"
                      target="_blank"
                      href={item.html_url}
                      rel="noopener noreferrer"
                    >
                      <h2 className="username">{item.login}</h2>
                    </a>
                  </div>
                  <ShowName prop={item.url}></ShowName>
                </div>
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <p className="text-white">
              Want to Contribute ? Visit
              <a href="https://github.com/houseofgeeks/hg"> House Of Geeks</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
