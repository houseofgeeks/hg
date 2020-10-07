import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MachineLearningMembers from "../../Members/Community/MachineLearning.members";
import CommunityTemplate from "./CommunityTemplate";
import { CommunityDetails as community } from "./CommunityDetails";

function MachineLearning() {
  return (
    <div className="machine-learning">
      <CommunityTemplate Community_details={community.ML} />
      <MachineLearningMembers />
    </div>
  );
}

export default MachineLearning;
