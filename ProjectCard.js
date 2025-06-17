import React from "react";

function ProjectCard({ title, date, tags, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p><em>{date}</em> | {tags.join(", ")}</p>
      <p>{description}</p>
      <a href={link} className="button">View Project</a>
    </div>
  );
}

export default ProjectCard;