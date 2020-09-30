import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { ReactComponent as Github } from "./img/github-brands.svg";
import { ReactComponent as Insta } from "./img/instagram-brands.svg";
import { ReactComponent as Facebook } from "./img/facebook-brands.svg";
import { ReactComponent as Youtube } from "./img/youtube-brands.svg";
import footerSurface from "./img/footer-surface.svg";

function Footer() {
  return (
    <div className="footer-component star-background">
      <div className="footer-surface">
        <img
          className="img-fluid footer-surface-img"
          src={footerSurface}
          alt="footer-surface"
        />
      </div>
      <div className="container-fluid last">
        <div className="row">
          <div className="col-12 col-md-4 text-center text-white">
            <p>WebDev Team House Of Geeks</p>
          </div>
          <div className="col-12 col-md-4 text-center text-white">
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/houseofgeeks"
            >
              <Github className="icons"></Github>
            </a>
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/hG.iiitranchi"
            >
              <Facebook className="icons"></Facebook>
            </a>
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/hg.iiitranchi/"
            >
              <Insta className="icons"></Insta>
            </a>
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCvbh6phGLwpOnoM8g_GwlmQ"
            >
              <Youtube className="icons"></Youtube>
            </a>
            <p>Made with <span role="img" aria-label="heart">🤍</span> and open-sourced</p>
          </div>
          <div className="col-12 col-md-4 text-center text-white">
            <p>©HouseOfGeeks,IIIT Ranchi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
