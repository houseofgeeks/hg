import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import HeadMembers from './Community/Head.members';
import WebDAppDMembers from './Community/WebDAppD.members';
import CompetitiveCodingMembers from './Community/CompetitiveCoding.members';
import MachineLearningMembers from './Community/MachineLearning.members';
import RoboticsMembers from './Community/Robotics.members';
import IotMembers from './Community/Iot.members';
import ElectronicsMembers from './Community/Electronics.members';
import CreaxnMembers from './Community/Creaxn.members';
import AnonymousMembers from './Community/Anonymous.members';
import EventMembers from './Community/Event.members';

function Members() {
      return (<div className="members-component star-background">
            <HeadMembers/>
            <CompetitiveCodingMembers/>
            <WebDAppDMembers/>
            <ElectronicsMembers/>
            <IotMembers/>
            <MachineLearningMembers/>
            <RoboticsMembers/>
            <AnonymousMembers/>
            <CreaxnMembers/>
            <EventMembers/>
      </div>);
}

export default Members;
