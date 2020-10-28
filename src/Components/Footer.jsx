import React, { Component } from "react";
import "./../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
/*fab fa-facebook-f*/
export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="Footer-icones-list">
          <li className="Footer-icones-element">
            <a
              className="footer-icons-facebook-link"
              href="https://www.facebook.com/tarajarmontunis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="grey" size="3x" icon={faFacebookSquare} />
            </a>
          </li>
          <li className="Footer-icones-element">
            <a
              className="footer-icons-instagram-link"
              href="https://www.instagram.com/tara_jarmon_tun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="grey" size="3x" icon={faInstagram} />
            </a>
          </li>
        </ul>
        <ul className="Footer-icones-list-mobile">
          <li className="Footer-icones-element">
            <a
              className="footer-icons-facebook-link"
              href="https://www.facebook.com/tarajarmontunis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="grey" size="2x" icon={faFacebookSquare} />
            </a>
          </li>
          <li className="Footer-icones-element">
            <a
              className="footer-icons-instagram-link"
              href="https://www.instagram.com/tara_jarmon_tun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="grey" size="2x" icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
