import React from "react";
import projectsData from "../projectsData";

export default function Projects() {
  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-1" style={{ opacity: 0.09 }} />
        <div className="blob blob-3" style={{ opacity: 0.09 }} />
      </div>
      <div className="projects-page page">
        <p className="section-label">What I've built</p>
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projectsData.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <h3>{proj.title}</h3>
              <p className="project-date">{proj.date}</p>
              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <p>{proj.description}</p>
              {proj.link && (
                <a href={proj.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
