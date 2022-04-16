import React from 'react';
import "../../src/index.css";
import ireneProfile from "../assets/images/ireneProfile.png";


const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
       
    
        <div className="home-left-wrapper">
          <h1 className="home-name">Irene Hipolito</h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-item">Web Developer</div>
              <div className="home-title-item">Content Creator</div>
              <div className="home-title-item">Traveller</div>
              <div className="home-title-item">Pharmacist</div>
            </div>
          </div>
          <p className="home-desc">
          Looking for opportunities to work and collaborate in small or large
          projects. 
          </p>
        </div>
      </div>
      <div className="home-right">
       
       
        <img src={ireneProfile} alt="" className="home-img" />
      </div>
    </div>
  )
}

export default Home