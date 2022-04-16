import React from "react";
import { useState } from "react";
import "../../src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // };
  return (
    <div className="messages">
      <div>
        <h2 id="contact-me">Contact Me: </h2>
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
            <div className="social-icon">
              <a href="https://github.com/idjh263">
                <FaGithub />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/irene-h-1823bb3b/">
                <FaLinkedin />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.youtube.com/channel/UCn9tI20EPzGgF0CjxnBZ3fA">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <label for="contact-name">Your Name</label>
          <input
            type="text"
            id="contact-name"
            name="username"
            value={inputs.name || ""}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="contact-name"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />

          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={inputs.message || ""}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
