import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css';
// import axios from 'axios';
import RunningEvents from './Tables/RunningEvents';
import UpcomingEvents from './Tables/UpcomingEvents';

function Event() {
    const [events, setEvents] = useState([
        { id: "5f73a0c07b28810017d7140a", title: "HacktoberFest'20", community: "Web/App Dev", "description": "OctoCon - Webinars and Workshops on different Techs!", "pdfPath": null, eventLink: "some", "banner": null, createdAt: "2020-09-29T21:01:52.284Z", "__v": 0 }, { id: "5f73a0b57b28810017d71409", title: "ACM-ICPC", community: "Cpmpetitive Programming", "description": "What, Why and How? ICPC Webinar!", "pdfPath": null, eventLink: "some", "banner": null, createdAt: "2020-09-29T21:01:41.338Z", "__v": 0 }, { id: "5f73a0a27b28810017d71408", title: "Pull-off", community: "Web/App Dev", "description": "Intro to Git/Github", "pdfPath": null, eventLink: "some", "banner": null, createdAt: "2020-09-29T21:01:22.407Z", "__v": 0 }, { id: "5f73a0857b28810017d71407", title: "Sept Long Discussion", community: "Competitive programming", "description": "Discussion on qustion from sept long Challenge!", "pdfPath": null, eventLink: "some", "banner": null, createdAt: "2020-09-29T21:00:53.874Z", "__v": 0 }
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
    });
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
                    <RunningEvents events={events} />
                </div>
                <div className="table-2">
                    <UpcomingEvents events={events} />
                </div>
            </div>
        </div>
    );
}

export default Event;
