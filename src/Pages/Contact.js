import React from "react";
import "../../src/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="messages">
      <div>
        <h2 id="contact-me">Contact Us: </h2>
        <p>
          Looking for opportunities to work and collaborate in small or large
          projects. If you have any questions for me, don't hesitate to contact
          me using this form:
        </p>
      </div>
      <div id="contact-container">
        <div className="contact-info">
          <h4>Contact Information:</h4>

          <div className="icon-text>">
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email: idjh263@gmail.com</span>
          </div>
          <div className="icon-text>">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span> Toronto, Canada</span>
          </div>
          <div className="social-media">
            {/* <a className="icon-circle" href="#">
           
              <i className="icon"></i>
              </a> */}
          </div>
        </div>
        <form className="contact-form">
          <label for="contact-name">Your Name</label>
          <input type="text" id="contact-name" placeholder="Your Name" />

          <label for="email">Email</label>
          <input type="email" id="contact-name" placeholder="Email" />

          <label for="contact-message">Message</label>
          <textarea id="contact-message" placeholder="Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
