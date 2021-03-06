import React from 'react';
//import { Link } from "react-router-dom";
import "../../src/index.css";
import proj1icon from "../assets/images/encore.png";
import proj2icon from "../assets/images/pharmappoint.png";
import proj3icon from "../assets/images/project3.png";

const Gprojects = () => {
  return (
    <div>
        <div className='project-main'>
            <h2>Bootcamp Collaborative Projects</h2>
            <p>Click on the image to see Github Repository</p>
        </div>
        <div id="project-wrapper">
        
            <div className="project-title">
                <h3>Project 1</h3>
               

                <a href="https://github.com/idjh263/project-one">
                <img src={proj1icon} alt =""
                className="githubIcon" />
                </a>
                <div>
                <h4>Server-side using 2 APIs (AudioDB & Ticketmaster)</h4>
               <a href="https://idjh263.github.io/project-one">Click here for Deployed Application</a>

"
            </div>
        </div>

            <div className="project-title">
                <h3>Project 2</h3>
                <a href="https://github.com/idjh263/Pharmappoint">
                <img src={proj2icon} alt =""
                className="githubIcon" />
                </a>
                
                
                <div>
                    <h4>CMS Application following MVC framework with CRUD (PharmAppoint)
                       
                    </h4>
                    <a href="https://obscure-basin-09475.herokuapp.com/">Click here for Deployed Application</a>
                </div>
            </div>
        
        <div className="project-title">
            <div>
            <h3>Project 3</h3>
            <a href="https://github.com/idjh263/final-project">
            <img src={proj3icon} alt="" className="githubIcon"/>
            </a>
                <h4>MERN Project
                </h4>
                <a href="https://frozen-inlet-62135.herokuapp.com/">Click here for Deployed Application</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gprojects
