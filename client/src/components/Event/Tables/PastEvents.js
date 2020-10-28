import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './PastEvents.css';

function PastEvents(props) {

    const [events, setEvents] = useState([
        {
            title: "Coming soon..",
            eventDate: new Date()
        }
    ]);
    useEffect(() => {
        if(props.events != null)
            setEvents(props.events);
    }, [props.events, events])

    return (
        <div className="table-2">
            <div className="table-title">
                Past Events
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">EVENT NAME</th>
                        <th scope="col">DATE | TIME</th>
                        <th scope="col">COMMUNITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event, id) => {
                            var currentDate = new Date();
                            var date = new Date(event.eventDate);
                            if (date < currentDate) {
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
                                        <td>{`${date.toLocaleDateString()} | ${date.toLocaleTimeString().substring(0, 5)}`}</td>
                                        <td>{`${event.community}`}</td>
                                    </tr>
                                )
                            }
                            else {
                                return(<tr key={id} ></tr>);
                            }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PastEvents;