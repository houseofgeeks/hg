import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetitiveCodingMembers from '../../Members/Community/CompetitiveCoding.members';

function CompetitiveCoding() {
  return (
    <div className="competitive-coding">
      <h1>This is Competitive coding community page.</h1>
      <CompetitiveCodingMembers />
    </div>
  );
}

export default CompetitiveCoding;
