import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { ReactComponent as Github } from "./img/github-brands.svg";
import { ReactComponent as Insta } from "./img/instagram-brands.svg";
import { ReactComponent as Facebook } from "./img/facebook-brands.svg";
import { ReactComponent as Youtube } from "./img/youtube-brands.svg";
import { ReactComponent as LinkedIn } from "./img/linkedin-brands.svg";
import { ReactComponent as Twitter } from "./img/twitter-brands.svg";
import footerSurface from "./img/footer-surface.svg";
import Modal from "./modal";

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
          <div className="col-lg-12 text-center text-white">
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
              href="https://www.linkedin.com/company/hgiiitranchi/"
            >
              <LinkedIn className="icons fa-7x"></LinkedIn>
            </a>

            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/_houseofgeeks/"
            >
              <Twitter className="icons"></Twitter>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-sm-4 text-center text-white">
            <p
              className="trigger-modal"
              data-toggle="modal"
              data-target="#WebTeamModal"
              style={{ textDecorationLine: "none" }}
            >
              Contributors
            </p>
          </div>
          <div className="col-12 col-md-4 col-sm-4 text-center text-white">
            <p>
              Made with
              <span role="img" aria-label="heart">
                ❤️️
              </span>
              and open-sourced
            </p>

            <p>
              This website is designed by{" "}
              <a className="credit" href="https://github.com/EricLiclair">
                {" "}
                @EricLiclair.
              </a>
            </p>
          </div>
          <div className="col-12 col-md-4 col-sm-4 text-center text-white">
            <p>© HouseOfGeeks,IIIT Ranchi</p>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Footer;
