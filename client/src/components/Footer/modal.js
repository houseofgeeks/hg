import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import ShowName from "./showName";

function Modal() {
  // 1 - while fetching, 0 - fetch failed, -1 - fetched, 
  const [dataStatus, updateStatus] = useState({status: 1, message: "Fetching Contributors form GitHub"});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getGitHubUserWithFetch = async () => {
      try{
        const response = await fetch(
          "https://api.github.com/repos/houseofgeeks/hg/contributors"
        );
        if(response.status === 200){
          const jsonData = await response.json();
          console.log(response);
          setUserData(jsonData);
          updateStatus({status: -1, message: "Fetched"});
        }else{
          updateStatus({status: 0, message: "Fetching failed, try after after some time"});
        }
      }catch(e){
        updateStatus({status: 0, message: "Fetching failed, try after after some time"});
      }
    };
    getGitHubUserWithFetch();
  }, []);

  return (
    <div
      className="modal fade "
      id="WebTeamModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg ">
        <div className="modal-content modal-back">
          <div className="modal-body row">
            <h5 className="text-pink col-12" id="exampleModalLabel">
              Contributors
            </h5>
            <p type="button" className="close-button" data-dismiss="modal">
              <span>x</span>
            </p>
            {dataStatus.status === -1 ?  
              <>{userData.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-12">
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
              ))}</>
              : 
              <>
                <div className="contributor-message">
                  <img alt="github-error" height={200} width={200} src="./images/github_error.png" />
                  <br />
                  <div>{dataStatus.message}</div>
                </div>
              </>
            }
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
