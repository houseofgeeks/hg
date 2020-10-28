import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';
import Event from '../Home/AboutUs/Event/Event';

function Events() {
  return (
    <div className="event-component">
          <div className="title">
           Events
         </div>
         <Event />
    </div>
  );
}

export default Events;
