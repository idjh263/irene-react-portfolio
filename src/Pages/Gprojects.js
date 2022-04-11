import React from 'react';
import "../../src/index.css";
// import proj1icon from "../../assets/images/html.png";
import proj2icon from "../assets/images/pharmappoint.png";
// import proj1icon from "../../assets/images/html.png";

const Gprojects = () => {
  return (
    <div>
        <div className='project-main'>
        <h2>Bootcamp Collaborative Projects</h2>
        </div>
        <div id="project-wrapper">
        
            <div className="project-title">
                <h3>Project 1</h3>
                
                <div >
                    <h4>Server-side using 2 APIs (AudioDB & Ticketmaster)</h4>
                </div>
            </div>

            <div className="project-title">
                <h3>Project 2</h3>
                <img src={proj2icon} alt="" />
                <div>
                    <h4>CMS Application following MVC framework with CRUD (PharmAppoint)
                       
                    </h4>
                </div>
            </div>
        
        <div className="project-title">
            <div>
            <h3>Project 3</h3>
                <h4>MERN Project
                <br/> Coming soon
                </h4>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gprojects