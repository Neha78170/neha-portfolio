import React from 'react';
import ProjectData from '../Data/ProjectData';
import './Projects.css';  // Optional: for styling

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {ProjectData.map((project, index) => (
          <div className="project-item" key={index}>
            <img className="project-image" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
