import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoboticsMembers from '../../Members/Community/Robotics.members';

function Robotics() {
  return (
    <div className="robotics">
      <h1>This is the Robotics community page.</h1>
      <RoboticsMembers />
    </div>
  );
}

export default Robotics;
