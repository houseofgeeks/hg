import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DesignMembers from "../../Members/Community/Design.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function Design() {
  return (
    <div className="design">
      <CommunityTemplate Community_details={community.Design} />
      <DesignMembers />
    </div>
  );
}

export default Design;
