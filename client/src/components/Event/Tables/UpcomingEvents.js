import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLinkExternal } from 'react-icons/bi';
import './UpcomingEvents.css';

function UpcomingEvents(props) {

    const [events, setEvents] = useState([
        {
            title: "Coming soon..",
            eventDate: Date.now()
        }
    ]);
    useEffect(() => {
        if(props.events != null)
            setEvents(props.events);
    }, [props.events, events])

    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }

    return (
        <div className="table-1">
            <div className="table-title">
                Upcoming Events
            </div>
            <table className="table table-responsive-sm">
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
                            if (date >= currentDate) {
                                return (
                                    <tr key={id} >
                                        <td className="event-title">
                                            <a
                                                rel="noopener noreferrer"
                                                href={`${event.eventLink}`}
                                                target="_blank"
                                            >
                                                {`${event.title} `}
                                                <BiLinkExternal/>
                                            </a>
                                        </td>
                                        <td>{`${date.toLocaleDateString() } | ${ tConvert(date.toLocaleTimeString().substr(0, 5))}`}</td>
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

export default UpcomingEvents;