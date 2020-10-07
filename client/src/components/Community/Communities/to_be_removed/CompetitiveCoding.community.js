import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CompetitiveCodingMembers from "../../Members/Community/CompetitiveCoding.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function CompetitiveCoding() {
  const currentloc = String(window.location); //Gets current URL
  let currenttab = currentloc.substring(currentloc.lastIndexOf("/") + 1); //Gets current element from navbar
  currenttab = "competitivecoding";
  return (
    <div className="competitive-coding">
      <CommunityTemplate Community_details={community[currenttab]} />
      <CompetitiveCodingMembers />
    </div>
  );
}

export default CompetitiveCoding;
