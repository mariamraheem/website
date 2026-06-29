import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const skills = {
  "Data & Analysis": [
    { name: "Survey Design", cat: "data" },
    { name: "M&E", cat: "data" },
    { name: "Python", cat: "data" },
    { name: "R", cat: "data" },
    { name: "SQL", cat: "data" },
    { name: "Stata", cat: "data" },
  ],
  "Communication": [
    { name: "Policy Briefs", cat: "design" },
    { name: "Data Viz", cat: "design" },
    { name: "Op-Eds", cat: "design" },
    { name: "Dashboards", cat: "design" },
  ],
  "Tools & Methods": [
    { name: "Qualtrics", cat: "tools" },
    { name: "Power BI", cat: "tools" },
    { name: "Excel", cat: "tools" },
    { name: "Git", cat: "tools" },
    { name: "ArcGIS", cat: "tools" },
  ],
};

const interests = [
  { emoji: "📚", title: "Urdu Literature", desc: "Poetry that moves between languages" },
  { emoji: "☕", title: "Chai Connoisseur", desc: "Strong opinions about doodh pati" },
  { emoji: "🏙️", title: "Chicago", desc: "Three years in, still discovering it" },
  { emoji: "🌏", title: "Lahore", desc: "Home, always — wherever I am" },
  { emoji: "🎧", title: "Music", desc: "Lo-fi for focus, Coke Studio for everything else" },
  { emoji: "🤝", title: "Community", desc: "Global Shapers, policy review, always connecting" },
];

export default function About() {
  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-1" style={{ opacity: 0.1 }} />
        <div className="blob blob-2" style={{ opacity: 0.1 }} />
      </div>

      <div className="about-page page">
        <FadeUp>
          <p className="section-label">Who I am</p>
          <h1 className="section-title">About Me</h1>
        </FadeUp>

        <div className="about-grid">
          <FadeUp delay={100}>
            <div className="about-bio">
              <p>
                I moved from <span className="highlight">Lahore to Chicago</span> three years ago
                to work on a problem I kept running into: tons of fragmented data, very few tools
                people could actually use.
              </p>
              <p style={{ marginTop: "1rem" }}>
                In Pakistan, I managed education data across hundreds of schools, built programs
                that brought digital tools to teachers for the first time, and ran surveys reaching
                tens of thousands of families during COVID. At UChicago, I researched what a century
                of early childhood policy could teach us about what works.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Now I help Chicago parents navigate a school system that makes choosing a school
                harder than it needs to be — at{" "}
                <span className="highlight">Kids First Chicago</span>, I turn CPS data into
                something families can use. I also consult for{" "}
                <span className="highlight">Evidence Action</span> on monitoring and evaluation for
                a program delivering free chlorine in Liberia.
              </p>
              <p style={{ marginTop: "1rem" }}>
                If you're working on education, climate, or community-centered policy, I'd love
                to connect.
              </p>
              <div style={{ marginTop: "1.8rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/research" className="btn-primary">See my research</Link>
                <Link to="/resume" className="btn-secondary">View resume</Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="skills-section">
              <p className="section-label">What I work with</p>
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} style={{ marginBottom: "1.4rem" }}>
                  <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-light)", marginBottom: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {group}
                  </p>
                  <div className="skills-grid" style={{ gap: "0.5rem" }}>
                    {items.map(s => (
                      <span key={s.name} className={`skill-pill ${s.cat}`}>{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={150}>
          <div className="interests-section">
            <p className="section-label">Beyond the work</p>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>A few things about me</h2>
            <div className="interests-grid">
              {interests.map(item => (
                <div key={item.title} className="interest-card">
                  <span className="interest-emoji">{item.emoji}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
