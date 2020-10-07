import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css';
import Events from '../Home/AboutUs/Event/Event';

function Event() {
  return (
    <div className="event-component">
      <div className="event_title">
        Events
      </div>
      <Events />
    </div>
  );
}

export default Event;
