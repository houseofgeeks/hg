import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElectronicsMembers from '../../Members/Community/Electronics.members';

function Electronics() {
  return (
    <div className="electronics">
      <h1>This is the Electronics and IoT community page.</h1>
      <ElectronicsMembers />
    </div>
  );
}

export default Electronics;
