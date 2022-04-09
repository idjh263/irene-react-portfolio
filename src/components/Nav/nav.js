import React from "react";
import './nav.css'

const Nav = () => {
  return (
    <div id="navbar">
      <a className='active' href="#">Home</a>
      <a href="#">About Me</a>
      <a href="#">Skills</a>
      <a href="#">Project</a>
    </div>
  );
};

export default Nav;
