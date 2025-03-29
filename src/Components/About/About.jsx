import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" height="400px" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm a passionate and enthusiastic aspiring developer eager to
              start my career in web development. I am currently building my
              skills in full-stack development and am excited to learn more as I
              work on real-world projects.
            </p>
            <p>
              I am actively improving my knowledge in both frontend and backend
              technologies, and I am keen to contribute to dynamic teams and
              learn from experienced professionals.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PERSONAL PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0+</h1>
          <p>YEARS OF PROFESSIONAL EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HOURS OF CODING DAILY</p>
        </div>
      </div>
    </div>
  );
};

export default About;
