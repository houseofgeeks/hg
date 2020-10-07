import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WebDAppDMembers from "../../Members/Community/WebDAppD.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function WebDAppD() {
  return (
    <div className="webd-appd">
      <CommunityTemplate Community_details={community.WebDAppD} />
      <WebDAppDMembers />
    </div>
  );
}

export default WebDAppD;
