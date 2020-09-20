import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MachineLearningMembers from '../../Members/Community/MachineLearning.members';

function MachineLearning() {
  return (
    <div className="machine-learning">
      <h1>This is the Machine Learning community page.</h1>
      <MachineLearningMembers />
    </div>
  );
}

export default MachineLearning;
