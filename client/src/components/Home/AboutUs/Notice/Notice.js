import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import planet from "./planet.svg";
import mobilePlanet from "./mobile-planet.svg";
import "./Notice.css";

function Notice() {
  const [notices, setNotice] = useState([
    { title: "fetching notices", description: " . . ." },
  ]);
  useEffect(() => {
    axios
      .get("/api/notice")
      .then((res) => {
        const { result } = res.data;
        setNotice([...result]);
      })
      .catch((err) => {
        const result = [];
        result.push({
          title: "Something went wrong!",
          description: "Try reloading. . .",
        });
        setNotice(result);
      });
  }, []);

  return (
    <div className="notice-section">
      <div className="notice-title">From the Geeks' Satellite..</div>
      <div className="notice-content">
        <div className="title">
          Recieving signals...{" "}
          <span className="decrypting"> Decrypting...</span>
          <span className="latest-news"> Latest News...</span>
        </div>
        <div className="notice-list">
          <ul>
            {notices.map((notice, idx) => {
              return (
                <li key={idx}>
                  <div className="notice-item">
                    <a
                        rel="noopener noreferrer"
                        href={`${notice.eventLink}`}
                        target="_blank"
                        className="item-title"
                    >
                      <div>
                        {notice.title}
                      </div>
                    </a>
                    <div className="item-description">
                      {notice.description && <p>{notice.description}</p>}
                    </div>
                    <div className="item-link">
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="planet">
        <img src={planet} className="planet-img" alt="planet" />
      </div>
      <div className="mobile-planet">
        <img
          src={mobilePlanet}
          className="mobile-planet-img"
          alt="mobile planet"
        />
      </div>
    </div>
  );
}

export default Notice;
