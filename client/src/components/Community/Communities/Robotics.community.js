import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RoboticsMembers from "../../Members/Community/Robotics.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function Robotics() {
  return (
    <div className="robotics">
      <CommunityTemplate Community_details={community.Robotics} />
      <RoboticsMembers />
    </div>
  );
}

export default Robotics;
