import React from "react";
import "./skills.css";
import htmlicon from "../../assets/images/html.png";
import cssicon from "../../assets/images/css.png";
import jsicon from "../../assets/images/js.png";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h2>SKILLS</h2>

        <div className="icons">
          <img src={htmlicon} alt="" />
          <h3>HTML</h3>
        </div>
        <div className="icons">
          <img src={cssicon} alt="css icon" />
          <h3>CSS</h3>
        </div>
        <div className="icons">
          <img src={jsicon} alt="css icon" />
          <h3>JS</h3>
        </div>

      </div>
    </div>
  );
};

export default Skills;
