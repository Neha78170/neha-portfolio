import React from 'react';
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.jpg";
import location_icon from "../../assets/location_icon.webp";

function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-10 my-10 px-5 sm:px-10 md:px-[100px] lg:px-[170px]"
      id="contact"
    >
      <div className="relative text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-[80px] font-semibold text-white">
          Get in Touch
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[150px] text-white w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <h3 className="text-3xl sm:text-4xl lg:text-[60px] font-bold bg-gradient-to-l from-[#ad0f00e0] to-[#eec9c9e6] bg-clip-text text-transparent">
            Let's Talk
          </h3>
          <p className="text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nihil.
          </p>

          <div className="flex flex-col gap-5 text-[#eec9c9e6] text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <img src={mail_icon} alt="email" className="h-6 sm:h-[40px]" />
              <p>nehaneha09276@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={call_icon} alt="call" className="h-5 sm:h-[35px]" />
              <p>+91 7817066722</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={location_icon} alt="location" className="h-6 sm:h-[40px]" />
              <p>Shikarpur Bulandshahr Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="flex flex-col gap-4 w-full lg:w-1/2">
          <label htmlFor="name" className="text-[#eec9c9e6] text-base sm:text-lg font-medium">Your Name :</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full h-12 sm:h-[60px] px-4 rounded bg-[#32323c] text-[#eec9c9e6] text-base sm:text-lg focus:outline-none"
          />

          <label htmlFor="email" className="text-[#eec9c9e6] text-base sm:text-lg font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-12 sm:h-[60px] px-4 rounded bg-[#32323c] text-[#eec9c9e6] text-base sm:text-lg focus:outline-none"
          />

          <label htmlFor="message" className="text-[#eec9c9e6] text-base sm:text-lg font-medium">Write your message here</label>
          <textarea
            rows="6"
            id="message"
            placeholder="Enter your message"
            className="w-full p-4 rounded bg-[#32323c] text-[#eec9c9e6] text-base sm:text-lg focus:outline-none"
          />

          <button
            type="submit"
            className="self-start border-none text-white rounded-full bg-gradient-to-l from-[#ad0f00e0] to-[#eec9c9e6] text-base sm:text-lg py-3 px-8 mt-2 cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
