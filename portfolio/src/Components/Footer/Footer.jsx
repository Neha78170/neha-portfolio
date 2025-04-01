import React from 'react'
import "./footer.css"
import user_icon from '../../assets/user_icon.png'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <p>I am Passionate front-end developer,easer to learn and create amazing web experience. </p>

        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" height="50px"/>
                <input type='email' placeholder='Enter your email'/>
            </div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bootom-left">
            0 2025 Neha Kashyap .All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
