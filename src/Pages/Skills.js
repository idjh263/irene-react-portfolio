import React from 'react';
import "../../src/index.css";
import htmlicon from "../assets/images/html.png";
import cssicon from "../assets/images/css.png";
import jsicon from "../assets/images/js.png";
import npmicon from "../assets/images/npm.png";
import mongoicon from "../assets/images/mongodb.png";
import reacticon from "../assets/images/react.png";

const Skills = () => {
  return (
    <div>
      <div className="skill-title">
      <h2>Skills:</h2>

      </div>
      <div className="skill-wrapper">
       

        <div className="icons">
          <img src={htmlicon} alt="" />
          <h3>HTML</h3>
        </div>
        <div className="icons">
          <img src={cssicon} alt="css icon" />
          <h3>CSS</h3>
        </div>
        <div className="icons">
          <img src={jsicon} alt="js icon" />
          <h3>JS</h3>
        </div>
        <div className="icons">
          <img src={npmicon} alt="npm icon" />
          <h3>Node</h3>
        </div>
        <div className="icons">
          <img src={mongoicon} alt="mongo icon" />
          <h3>Mongo</h3>
        </div>
        <div className="icons">
          <img src={reacticon} alt="react icon" />
          <h3>React</h3>
        </div>

      </div>
    </div>
  )
}

export default Skills