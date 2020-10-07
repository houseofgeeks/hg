import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommunityTemplate.css";
import { CommunityDetails as community } from "./CommunityDetails";
// import CompetitiveCodingMembers from "../../Members/Community/CompetitiveCoding.members";

function CommunityTemplate() {
  const currentloc = String(window.location); //Gets current URL
  let currenttab = currentloc.substring(currentloc.lastIndexOf("/") + 1); //Gets current element from navbar
  return (
    <div className="row community-template">
      <div className="col-12 col-lg-6">
        <img
          src={community[currenttab].imageLink}
          alt="CP"
          className="images"
        ></img>
      </div>
      <div className="col-12 col-lg-6 detail-box">
        <h1 className="title">{community[currenttab].name}</h1>
        <p className="text-white details">{community[currenttab].details}</p>
      </div>
      <h1>This is a Member Component</h1>
    </div>
  );
}

export default CommunityTemplate;
