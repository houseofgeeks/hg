import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css';
import axios from 'axios';
import eventList from './EventList.json';

function Event() {
    const [events, setEvents] = useState([
        { title: "fetching events", description: ". . ." }
    ]);
    useEffect(() => {
        // axios
        // .get("/api/event/all")
        // .then((res) => {
        //     const { result } = res.data;
        //     setEvents([...result]);
        // })
        // .catch((err) => {
        //     setEvents([
        //     {
        //         eventLink: "/event/all",
        //         title: "Something went wrong",
        //         description: "Try again....",
        //     }
        //     ]);
        // });
        setEvents(eventList);
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
        <div classname="main-table">
            <div className="table-1">
                <div className="table-title">
                    Running Events
                </div>
                <table>
                    <tr>
                        <th>EVENT NAME</th>
                        <th>START</th>
                        <th>END</th>
                    </tr>
                    {events.forEach((event, id) => {
                        if(event.eventDate<=Date.now())
                            return(
                                <tr key={id} href={`${event.eventLink}`}>
                                    <td>{`${event.title}`}</td>
                                    <td>{`${event.eventDate}`}</td>
                                    <td>{`${event.eventDate}`}</td>
                                </tr>
                            )
                    })}
                </table>
            </div>
            <div className="table-2">
                <div className="table-title">
                    Upcoming Events
                </div>
                <table>
                    <tr>
                        <th>EVENT NAME</th>
                        <th>START</th>
                        <th>END</th>
                    </tr>
                    {events.forEach((event, id) => {
                        if(event.eventDate>Date.now())
                            return(
                                <tr key={id} href={`${event.eventLink}`}>
                                    <td>{`${event.title}`}</td>
                                    <td>{`${event.eventDate}`}</td>
                                    <td>{`${event.eventDate}`}</td>
                                </tr>
                            )
                    })}
                </table>
            </div>
        </div>
        </div>
    );
}

export default Event;
