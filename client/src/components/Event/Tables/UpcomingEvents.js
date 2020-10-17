import React from 'react';
import './UpcomingEvents.css';

function UpcomingEvents(props) {
    return (
        <div className="table-2">
            <div className="table-title">
                Upcoming Events
            </div>
            <table>
                <thead>
                    <tr>
                        <th>EVENT NAME</th>
                        <th>DATE</th>
                        <th>COMMUNITY</th>
                    </tr>
                </thead>
                <tbody>
                    {props.events.forEach((event, id) => {
                        if(event.eventDate>Date.now())
                            return(
                                <tr key={id} href={`${event.eventLink}`}>
                                    <td className="event-title">{`${event.title}`}</td>
                                    <td>{`${event.eventDate}`}</td>
                                    <td>{`${event.community}`}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UpcomingEvents;