import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Community.css";
import list from "./CommunityList";
import loader from "./loader.svg";

function Community() {
  return (
    <div className="community-component">
      <div className="side-banner">Wings of House of Geeks</div>
      <div className="title">Communities of House of Geeks</div>
      <div className="container-fluid main">
        <div className="row justify-content-around">         
          <div className="col-12" />
          {list.map((item) => {
            return (
              <div
                key={`${item.id}`}
                className={`${item.linkName} community-card col-sm-4 col-xs-12`}
              >
                <Link to={`/${item.linkName}`} className="link">
                  <div>
                    <div className="large-name name">
                      Community of {`${item.name}`}
                    </div>
                    <div className="small-name name">{`${item.name}`}</div>
                    <div className="description">{`${item.description}`}</div>
                    <div className="know-more">
                      Know More..
                      <img className="loader" src={loader} alt="loader" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Community;
