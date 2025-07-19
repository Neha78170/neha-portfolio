import React from 'react';
import profile_img from "../../assets/profile_img.png";
 import "./hero.css";

function hero() {
  return (
    <div className='hero-section' id='home'>
              <img src={profile_img} alt="" height="200px"/>
              <h1><span>I am a Neha Kashyap</span>Front-end Developer</h1>
              <p>I am Passionate front-end developer,easer to learn and create amazing web experience. </p>
              <div className='hero-action'>
                <button className='hero-connect'>Connect With Me</button>
                 <button className='hero-resume'>My resume</button>
              </div>
    </div>

     
  )
}

export default hero
