import React, { useEffect, useState } from 'react';
import './UpcomingEvents.css';

function UpcomingEvents(props) {

    const [events, setEvents] = useState([
        {
            title: "Coming soon..",
            eventDate: new Date()
        }
    ]);
    useEffect(() => {
        if (props.events != null)
            setEvents(props.events);
        console.log(events);
    }, [props.events, events]);

    return (
        <div className="table-1">
            <div className="table-title">
                Upcoming Events
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">EVENT NAME</th>
                        <th scope="col">DATE</th>
                        <th scope="col">COMMUNITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event, id) => {
                            var currentDate = new Date();
                            var date = new Date(event.eventDate);
                            if (date >= currentDate) {
                                return (
                                    <tr key={id} >
                                        <td className="event-title">
                                            <a
                                                rel="noopener noreferrer"
                                                href={`${event.eventLink}`}
                                                target="_blank"
                                            >
                                                {`${event.title}`}
                                            </a>
                                        </td>
                                        <td>{`${event.eventDate}`}</td>
                                        <td>{`${event.community}`}</td>
                                    </tr>
                                )
                            }
                            else {
                                return(<tr></tr>);
                            }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UpcomingEvents;