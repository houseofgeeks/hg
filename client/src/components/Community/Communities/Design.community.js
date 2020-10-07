import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DesignMembers from "../../Members/Community/Design.members";
import CommunityTemplate from "./CommunityTemplate";

function Design() {
  const Community_details = {
    imageLink: "./images/CP_Community.svg",
    name: "Community of Design UI and UX",
    details:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  return (
    <div className="design">
      <CommunityTemplate Community_details={Community_details} />

      <DesignMembers />
    </div>
  );
}

export default Design;
