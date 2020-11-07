import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLinkExternal } from 'react-icons/bi';
import './PastEvents.css';

function PastEvents(props) {

    const [events, setEvents] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [message, setMessage] = useState("Retrieving Events...")

    useEffect(() => {
        if (props.events !== undefined) {
            const today = new Date();
            if(props.events.some(e => e.eventDate >= today)){
                setMessage("No upcoming events found!");
            }else{
                setEvents(props.events);
                setLoading(props.isLoading);
            }
        }
    }, [props.events, props.isLoading])

    var options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return (
        <div className="table-2">
            <div className="table-title">
                Past Events
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
                        isLoading?<tr><td colSpan="3">{message}</td></tr>:events.map((event, id) => {
                            var currentDate = new Date();
                            var date = new Date(event.eventDate);
                            if (date < currentDate) {
                                return (
                                    <tr key={id} >
                                        <td colSpan="1" className="event-title">
                                            <a
                                                rel="noopener noreferrer"
                                                href={`${event.eventLink}`}
                                                target="_blank"
                                            >
                                                {`${event.title} `}
                                                <BiLinkExternal/>
                                            </a>
                                        </td>
                                        <td colSpan="1">{`${date.toLocaleDateString() } | ${ date.toLocaleString('en-US', options) }`}</td>
                                        <td colSpan="1">{`${event.community}`}</td>
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