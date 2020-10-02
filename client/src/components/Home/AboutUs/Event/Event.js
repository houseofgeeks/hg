import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import planet from "./planet.svg";
import "./Event.css";

function Event() {
  const [events, setEvent] = useState([
    { title: "fetching events", description: ". . ." },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/event")
      .then((res) => {
        const { result } = res.data;
        setEvent([...result]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setEvent([
          {
            eventLink: "/event",
            title: "Something went wrong!",
            description: "Try reloading. . .",
          },
        ]);
      });
  }, []);

  return (
    <div className="event-section">
      <div className="event-title">From the Geeks' Satellite..</div>
      <div className="event-content">
        <div className="title">
          <span className="receiving">Recieving signals...</span>
          <span className="decrypting"> Decrypting...</span>
          <span className="latest-news"> Latest Events...</span>
        </div>
        <div className="planet">
          <img src={planet} className="planet-img" alt="planet" />
        </div>
        {!isLoading && (
          <div className="event-list">
            <ul>
              {events.map((event, idx) => {
                return (
                  <li key={idx}>
                    <div className="event-item">
                      <a
                        rel="noopener noreferrer"
                        href={`${event.eventLink}`}
                        target="_blank"
                        className="item-title"
                      >
                        <div>{event.title}</div>
                      </a>
                      <div className="item-description">
                        {event.description && <p>{event.description}</p>}
                      </div>
                      <div className="item-link"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
