import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ElectronicsMembers from "../../Members/Community/Electronics.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function Electronics() {
  return (
    <div className="electronics">
      <CommunityTemplate Community_details={community.Electronics} />
      <ElectronicsMembers />
    </div>
  );
}

export default Electronics;
