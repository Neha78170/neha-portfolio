import React from "react";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] mx-[100px] my-[30px]" id="about">
      <div className="relative">
        <h1 className="px-[30px] text-[80px] font-semibold">About Me</h1>
      </div>

      <div className="flex gap-[50px] flex-wrap justify-center">
        <div>
          <img src={profile_img} alt="Profile" height="400px" className="h-[400px] object-cover" />
        </div>

        <div>
          <div className="flex flex-col gap-[20px] text-[20px] font-medium mb-[50px] max-w-[600px]">
            <p>
              Hi, I'm a passionate and enthusiastic aspiring developer eager to start my career in web development. I am currently building my skills in full-stack development and am excited to learn more as I work on real-world projects.
            </p>
            <p>
              I am actively improving my knowledge in both frontend and backend technologies, and I am keen to contribute to dynamic teams and learn from experienced professionals.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            {[
              { skill: "HTML & CSS", width: "w-[80%]" },
              { skill: "JavaScript", width: "w-[70%]" },
              { skill: "React Js", width: "w-[60%]" },
              { skill: "Bootstrap", width: "w-[70%]" },
              { skill: "Git", width: "w-[80%]" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[40px] transition-transform duration-300 hover:scale-[1.05]"
              >
                <p className="min-w-[150px] text-[20px] font-medium">{item.skill}</p>
                <hr
                  className={`${item.width} h-2 rounded-full border-none bg-gradient-to-r from-[#ad0f00e0] to-[#eec9c9e6]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between mb-[80px] flex-wrap gap-6">
        {[
          { count: "3+", label: "PERSONAL PROJECTS COMPLETED" },
          { count: "0+", label: "YEARS OF PROFESSIONAL EXPERIENCE" },
          { count: "5+", label: "HOURS OF CODING DAILY" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12]"
          >
            <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#ad0f00e0] to-[#eec9c9e6] bg-clip-text text-transparent">
              {item.count}
            </h1>
            <p className="text-[22px] font-medium text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
