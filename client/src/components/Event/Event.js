import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css';
import axios from 'axios';
import PastEvents from './Tables/PastEvents';
import UpcomingEvents from './Tables/UpcomingEvents';

function Event() {
    const [events, setEvents] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API || ''}/event/all`)
      .then((res) => {
        const { result } = res.data;
        setEvents([...result]);
        setLoading(false);
      })
      .catch((err) => {
        setEvents([
          {
            eventLink: "/event",
            title: "Something went wrong",
            description: "Try again....",
          },
        ]);
      });
  }, []);
    return (
        <div className="event-component">
            <div className="event-title">
                Events
            </div>
            <div className="subtitle">
                <div className="satellite-writeup">
                    From the Geek's Satellite...
                </div>
                <div className="signal-writeup">
                    Recieving signals... Decrypting... Latest news...
                </div>
            </div>
            <div className="main-table">
                <div className="table-1">
                    <UpcomingEvents events={events} isLoading={isLoading}/>
                </div>
                <div className="table-2">
                    <PastEvents events={events} isLoading={isLoading}/>
                </div>
            </div>
        </div>
    );
}

export default Event;
