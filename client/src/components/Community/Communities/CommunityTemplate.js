import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommunityTemplate.css";
import { CommunityDetails as community } from "./CommunityDetails";
import WebDAppDMembers from "../../Members/Community/WebDAppD.members";
import CompetitiveCodingMembers from "../../Members/Community/CompetitiveCoding.members";
import MachineLearningMembers from "../../Members/Community/MachineLearning.members";
import RoboticsMembers from "../../Members/Community/Robotics.members";
import IotMembers from "../../Members/Community/Iot.members";
import ElectronicsMembers from "../../Members/Community/Electronics.members";
import CreaxnMembers from "../../Members/Community/Creaxn.members";
import AnonymousMembers from "../../Members/Community/Anonymous.members";
import EventMembers from "../../Members/Community/Event.members";

function CommunityTemplate() {
  const currentloc = String(window.location); //Gets current URL
  let currenttab = currentloc.substring(currentloc.lastIndexOf("/") + 1); //Gets current element from navbar
  return (
    <div className="row community-template star-background">
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
      <div className="members-component col-12">
        {currenttab === "competitive_coding" && (
          <CompetitiveCodingMembers></CompetitiveCodingMembers>
        )}
        {currenttab === "electronics_iot" && (
          <div>
            <ElectronicsMembers></ElectronicsMembers>
            <IotMembers></IotMembers>
          </div>
        )}
        {currenttab === "robotics" && <RoboticsMembers></RoboticsMembers>}
        {currenttab === "webd_appd" && <WebDAppDMembers></WebDAppDMembers>}
        {currenttab === "machine_learning" && (
          <MachineLearningMembers></MachineLearningMembers>
        )}
        {currenttab === "design" && (
          <div>
            <AnonymousMembers></AnonymousMembers>
            <CreaxnMembers></CreaxnMembers>
            <EventMembers></EventMembers>
          </div>
        )}
      </div>
    </div>
  );
}
export default CommunityTemplate;
