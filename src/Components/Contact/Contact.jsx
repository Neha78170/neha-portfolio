import React from 'react';
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.jpg";
import location_icon from  "../../assets/location_icon.webp"
import "./Contact.css"  

function Contact() {
  return (
    <div className='contact' id="contact">
     <div className = "contact-title">
        <h2>Get in Touch </h2>
     </div>
      <div className="contact-section">
        <div className="contact-left">
           <h3>Let's Talk</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nihil.</p>
        <div className="contact-details">
            <div className="contact-detail">
            <img src={mail_icon} alt="email" height="50px"/>
            <p>nehaneha09276@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="call" height= "40px"/>
                <p>+91 7817066722</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="location" height="50px"/>
                <p>Shikarpur Bulandshahr Uttar Pradesh</p>
            </div>
        </div>
        </div>

            <form className="contact-right">
                <label htmlFor='name'>Your Name :</label>
                <input type="text" placeholder='Enter your name' id='name'/>
                <label htmlFor='email'>Your Email</label>
                <input type="email" placeholder='Enter your email' id='email'/>
                
                <label htmlFor='message'>Write your message here</label>
                <textarea rows="8" placeholder='Enter your message' id ='message'></textarea>
                <button type="submit" className='contact-submit'>Submit now</button>
            </form>
        </div>
      </div>
  )
}

export default Contact;