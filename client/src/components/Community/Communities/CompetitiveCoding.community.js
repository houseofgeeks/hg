import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CompetitiveCodingMembers from "../../Members/Community/CompetitiveCoding.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function CompetitiveCoding() {
  return (
    <div className="competitive-coding">
      <CommunityTemplate Community_details={community.CP} />
      <CompetitiveCodingMembers />
    </div>
  );
}

export default CompetitiveCoding;
