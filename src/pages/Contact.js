import React from "react";

export default function Contact() {
  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-2" style={{ opacity: 0.1 }} />
      </div>
      <div className="contact-page page">
        <p className="section-label">Say hello</p>
        <h1 className="section-title">Let's Connect</h1>
        <p style={{ color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8, marginTop: "1rem" }}>
          Whether you have a project in mind, a question about my work, or just want to chat about
          data — my inbox is always open.
        </p>
        <div className="contact-links">
          <a href="mailto:mariam.raheem67@gmail.com" className="contact-link">
            ✉️ Email me
          </a>
          <a href="https://github.com/mariamraheem" className="contact-link" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
          <a href="https://linkedin.com/in/mariamraheem" className="contact-link" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
