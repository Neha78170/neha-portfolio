import React from 'react';
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.jpg";
import location_icon from "../../assets/location_icon.webp";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] my-[40px] mx-[170px]" id="contact">
      <div className="relative">
        <h2 className="px-5 text-[80px] font-semibold text-white">Get in Touch</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-[150px] text-white">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[60px] font-bold bg-gradient-to-l from-[#ad0f00e0] to-[#eec9c9e6] bg-clip-text text-transparent">
            Let's Talk
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nihil.</p>

          <div className="flex flex-col gap-[30px] text-[#eec9c9e6] text-[20px]">
            <div className="flex items-center gap-2">
              <img src={mail_icon} alt="email" className="h-[50px]" />
              <p>nehaneha09276@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={call_icon} alt="call" className="h-[40px]" />
              <p>+91 7817066722</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={location_icon} alt="location" className="h-[50px]" />
              <p>Shikarpur Bulandshahr Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="flex flex-col items-start gap-5">
          <label htmlFor="name" className="text-[#eec9c9e6] text-[20px] font-medium">Your Name :</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-[700px] h-[78px] pl-5 rounded bg-[#32323c] text-[#eec9c9e6] text-[20px] font-[Outfit] focus:outline-none"
          />

          <label htmlFor="email" className="text-[#eec9c9e6] text-[20px] font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-[700px] h-[78px] pl-5 rounded bg-[#32323c] text-[#eec9c9e6] text-[20px] font-[Outfit] focus:outline-none"
          />

          <label htmlFor="message" className="text-[#eec9c9e6] text-[20px] font-medium">Write your message here</label>
          <textarea
            rows="8"
            id="message"
            placeholder="Enter your message"
            className="w-[650px] p-5 rounded bg-[#32323c] text-[#eec9c9e6] text-[20px] font-[Outfit] focus:outline-none"
          />

          <button
            type="submit"
            className="border-none text-white rounded-full bg-gradient-to-l from-[#ad0f00e0] to-[#eec9c9e6] text-[22px] py-[20px] px-[60px] mb-[50px] cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
