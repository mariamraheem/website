import React from "react";
import projectsData from "../projectsData";

function Projects() {
  return (
    <div>
      <h1>Data Projects Blog</h1>
      {projectsData.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h2>{proj.title}</h2>
          <div style={{fontSize: "0.95em", color: "#555"}}>
            {proj.date} &nbsp;&nbsp;
            <span className="project-tags">
              {proj.tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
              ))}
            </span>
          </div>
          <p>{proj.description}</p>
          {proj.link && (
            <a href={proj.link} className="button" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;