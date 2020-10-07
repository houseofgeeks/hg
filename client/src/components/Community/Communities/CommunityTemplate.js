import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommunityTemplate.css";

function CommunityTemplate(props) {
  return (
    <div className="row community-template">
      <div className="col-12 col-lg-6">
        <img
          src={props.Community_details.imageLink}
          alt="CP"
          className="images"
        ></img>
      </div>
      <div className="col-12 col-lg-6 detail-box">
        <h1 className="title">{props.Community_details.name}</h1>
        <p className="text-white details">{props.Community_details.details}</p>
      </div>
    </div>
  );
}

export default CommunityTemplate;
