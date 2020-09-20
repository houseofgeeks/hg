import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import WebDAppDMembers from './Community/WebDAppD.members';
import CompetitiveCodingMembers from './Community/CompetitiveCoding.members';
import MachineLearningMembers from './Community/MachineLearning.members';
import RoboticsMembers from './Community/Robotics.members';
import DesignMembers from './Community/Design.members';
import ElectronicsMembers from './Community/Electronics.members';

function Members() {
  return (
    <div className="members-component">
      <h1>This is the Members page.</h1>
      <CompetitiveCodingMembers />
      <WebDAppDMembers />
      <MachineLearningMembers />
      <RoboticsMembers />
      <DesignMembers />
      <ElectronicsMembers />
    </div>
  );
}

export default Members;
