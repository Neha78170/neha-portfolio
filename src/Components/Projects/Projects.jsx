import React from 'react';
import ProjectData from '../Data/ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-5 text-center bg-black">
      <h2 className="text-[40px] font-bold text-white mb-[30px]">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto px-5">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-[8px] shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-transform duration-300 text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-[8px] object-cover mb-[15px]"
            />
            <h3 className="text-[1.5rem] mb-[10px] bg-gradient-to-r from-red-600 to-red-200 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-[#666] text-[1rem] mb-[15px] leading-[1.5]">
              {project.description}
            </p>
            <div className="flex gap-6 mt-[10px]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] text-[1rem] hover:text-[#0056b3] transition-colors duration-300"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] text-[1rem] hover:text-[#0056b3] transition-colors duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
