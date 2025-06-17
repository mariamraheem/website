import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        [Your short bio here: background, interests, and what drives you in data science or analytics.]
      </p>
      <p>
        <b>Skills:</b> Python, Pandas, Data Visualization, Machine Learning, SQL, [add more...]
      </p>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
      </p>
    </div>
  );
}

export default About;