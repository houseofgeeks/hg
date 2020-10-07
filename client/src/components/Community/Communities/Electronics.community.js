import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ElectronicsMembers from "../../Members/Community/Electronics.members";
import CommunityTemplate from "./CommunityTemplate";

function Electronics() {
  const Community_details = {
    imageLink: "./images/CP_Community.svg",
    name: "Community of Electronics and IoT",
    details:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  return (
    <div className="electronics">
      <CommunityTemplate Community_details={Community_details} />
      <ElectronicsMembers />
    </div>
  );
}

export default Electronics;
