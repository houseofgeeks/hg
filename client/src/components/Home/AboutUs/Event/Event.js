import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import planet from "./planet_2.svg";
import "./Event.css";

import { Link } from "react-router-dom";
function Event({ page }) {
  const [events, setEvent] = useState([
    { title: "fetching events", description: ". . ." },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API || ""}/event`, {
        options: {
          limit:5
        }
      })
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
            title: "Something went wrong",
            description: "Try again....",
          },
        ]);
      });
  }, []);

  return (
    <div className="event-comp container-fluid">
      <div className="row">
        <div className="col-1 col-md-4">
          {!isLoading && (
            <img
              src={planet}
              className={`planet-img ${
                page === "Home" ? "planet-img-home" : ""
              }`}
              alt="planet"
            />
          )}
        </div>

        <div
          className={`event-section col-11 col-md-8 ${
            page === "Home" ? "event-section-home" : ""
          }`}
        >
          <div className="event-title">From the Geeks' Satellite..</div>
          <div className="event-content">
            <div className="mb-3 receiving-msg">
              <span className="receiving">Recieving signals...</span>
              <span className="decrypting"> Decrypting...</span>
              <span className="latest-news"> Latest Events...</span>
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
                  <div className="know-more">
                    <Link to="/event">Know More..</Link>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
