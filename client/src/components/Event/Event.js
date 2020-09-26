import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css';
import Notice from '../Home/AboutUs/Notice/Notice';

function Event() {
  return (
    <div className="event-component">
      <div className="title">
        Events
      </div>
      <Notice />
    </div>
  );
}

export default Event;
