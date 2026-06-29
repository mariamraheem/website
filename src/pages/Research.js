import React, { useEffect, useRef } from "react";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
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

const peerReviewed = [
  {
    citation: "Raheem, M., & Momina, A. U. (2021). Do Underlying Risk Preferences explain Individuals' Cognitive Ability?",
    journal: "The Lahore Journal of Economics",
    detail: "26(1), 85–122.",
    link: null,
  },
  {
    citation: "Solís Arce, J. S. et al. (2021). COVID-19 vaccine acceptance and hesitancy in low- and middle-income countries.",
    journal: "Nature Medicine",
    detail: "27(8), 1385–1394.",
    link: null,
  },
];

const opeds = [
  {
    citation: "Woods, H., & Raheem, M. (2026). Opinion: CPS mustn't let enrollment declines shortchange the students it serves.",
    outlet: "Crain's Chicago Business",
    link: null,
  },
  {
    citation: "Raheem, M., & Macdonald, I. (2024). EdTech for Smartphones: Building Teacher Capacity in Low-Resource Environments.",
    outlet: "EdTech Hub",
    link: null,
  },
  {
    citation: "Bizenjo, S., Raheem, M., & Majid, A. (2023). Beyond climate mitigation: the Pakistan floods showed there's no turning back.",
    outlet: "World Economic Forum — WEF Agenda",
    link: null,
  },
  {
    citation: "Asad, S., Qureshi, J., Raheem, M., Shah, T., & Zafar, B. (2021). Vaccine hesitancy in Pakistan is growing: here's how it can be tackled.",
    outlet: "LSE COVID-19 Blog",
    link: null,
  },
];

const projects = [
  {
    title: "School Choice Dashboard",
    tags: ["CPS Data", "Data Viz", "Policy"],
    desc: "An interactive tool helping Chicago parents compare public schools using CPS data — demystifying a system that too often feels opaque.",
    status: "live",
    link: null,
  },
  {
    title: "COVID Survey Analysis — Pakistan",
    tags: ["Survey Design", "Python", "Public Health"],
    desc: "Analyzed survey data from tens of thousands of Pakistani families during COVID-19 to understand vaccine hesitancy and economic vulnerability.",
    status: "complete",
    link: null,
  },
  {
    title: "EdTech Field Research — CERP",
    tags: ["M&E", "Education", "Pakistan"],
    desc: "Designed and ran monitoring for a program bringing digital teaching tools to low-resource schools across Pakistan for the first time.",
    status: "complete",
    link: null,
  },
  {
    title: "More coming soon",
    tags: [],
    desc: "I'm currently building interactive projects around education equity and public data. Check back soon.",
    status: "soon",
    link: null,
  },
];

const statusLabel = { live: "Live", complete: "Complete", soon: "Coming soon" };
const statusClass = { live: "status-live", complete: "status-complete", soon: "status-soon" };

export default function Research() {
  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-2" style={{ opacity: 0.09 }} />
        <div className="blob blob-3" style={{ opacity: 0.09 }} />
      </div>

      <div className="research-page page">
        <FadeUp>
          <p className="section-label">Work & writing</p>
          <h1 className="section-title">Research & Projects</h1>
        </FadeUp>

        {/* Interactive Projects */}
        <FadeUp delay={80}>
          <div className="research-block">
            <h2 className="research-block-title">Interactive Projects</h2>
            <div className="projects-grid" style={{ marginTop: "1.2rem" }}>
              {projects.map((p, i) => (
                <div className={`project-card${p.status === "soon" ? " project-soon" : ""}`} key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <h3>{p.title}</h3>
                    <span className={`project-status ${statusClass[p.status]}`}>{statusLabel[p.status]}</span>
                  </div>
                  <div className="project-tags">
                    {p.tags.map((tag, j) => <span className="project-tag" key={j}>{tag}</span>)}
                  </div>
                  <p>{p.desc}</p>
                  {p.link && (
                    <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Peer-Reviewed */}
        <FadeUp delay={100}>
          <div className="research-block">
            <h2 className="research-block-title">Peer-Reviewed Articles</h2>
            <div className="pub-list">
              {peerReviewed.map((p, i) => (
                <div className="pub-item" key={i}>
                  <p className="pub-citation">{p.citation}</p>
                  <p className="pub-journal">
                    <em>{p.journal}</em>{p.detail ? ` ${p.detail}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Op-eds / Blog */}
        <FadeUp delay={120}>
          <div className="research-block">
            <h2 className="research-block-title">Blog Pieces & Op-Eds</h2>
            <div className="pub-list">
              {opeds.map((p, i) => (
                <div className="pub-item" key={i}>
                  <p className="pub-citation">{p.citation}</p>
                  <p className="pub-journal"><em>{p.outlet}</em></p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
