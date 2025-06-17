import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

function ProjectsPage() {
  return (
    <div>
      <h1>Data Projects Blog</h1>
      {projectsData.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </div>
  );
}

export default ProjectsPage;