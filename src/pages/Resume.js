import React, { useEffect, useRef, useState } from "react";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
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

const education = [
  {
    school: "University of Chicago, Harris School of Public Policy",
    degree: "Master of Public Policy",
    years: "2023 – 2025",
    note: "Obama Foundation Scholar, 2024–25",
  },
  {
    school: "Lahore University of Management Sciences",
    degree: "B.S. (Hons) in Economics",
    years: "2015 – 2019",
    note: null,
  },
];

const experience = [
  {
    org: "Kids First Chicago",
    role: "Applied Data Fellow",
    period: "Aug 2025 – Present",
    desc: "Turn CPS data into tools and resources Chicago families can use to navigate school choice.",
  },
  {
    org: "Evidence Action",
    role: "Consultant, Monitoring Learning & Evaluation Strategy",
    period: "Sep 2025 – Present",
    desc: "Advise on M&E strategy for a program delivering free chlorine to households in Liberia.",
  },
  {
    org: "Center for the Economics of Human Development, UChicago",
    role: "Research Assistant",
    period: "Jan – Jun 2025",
    desc: "Researched what a century of early childhood policy interventions can teach us about what actually works.",
  },
  {
    org: "Energy Policy Institute at UChicago (EPIC)",
    role: "Research Fellow",
    period: "May – Sep 2024",
    desc: "Supported climate and energy policy research projects.",
  },
  {
    org: "Financial Systems Transformation, UChicago",
    role: "Data Management Assistant",
    period: "Oct 2023 – Sep 2024",
    desc: "Managed institutional data systems and supported analytics workflows.",
  },
  {
    org: "CERP",
    role: "Senior Research Associate, Education (2021–23) · Research Assistant, Economic Vulnerability Assessment (2020–21)",
    period: "Sep 2020 – Aug 2023",
    desc: "Managed education data across hundreds of schools; built programs bringing digital tools to teachers; ran COVID-era surveys reaching tens of thousands of families.",
  },
  {
    org: "LUMS School of Education",
    role: "Research Assistant",
    period: "Oct 2019 – Jun 2020",
    desc: "Supported education research at one of Pakistan's leading universities.",
  },
];

const teaching = [
  {
    course: "PPHA 41800: Survey Questionnaire Design",
    instructor: "Ipek Bilgen",
    term: "Spring 2024–25",
    school: "University of Chicago",
  },
  {
    course: "PPHA 41600: Survey Research Methodology",
    instructor: "David Sterett & Ipek Bilgen",
    term: "Winter 2024–25",
    school: "University of Chicago",
  },
  {
    course: "SOSC 30100: Mathematics for Social Sciences",
    instructor: "John Mark Hansen",
    term: "Summer 2024–25",
    school: "University of Chicago",
  },
  {
    course: "EDU 412: Economics of Education",
    instructor: "Rabea Malik",
    term: "Fall 2020",
    school: "LUMS",
  },
];

const leadership = [
  {
    org: "Data Ethics & Policy (Student Org.)",
    role: "Fundraising & Partnerships Lead",
    period: "Aug 2024 – Jun 2025",
  },
  {
    org: "Chicago Policy Review",
    role: "Senior Editor, Policy Analysis",
    period: "Oct 2023 – Sep 2024",
  },
  {
    org: "Global Shapers Community",
    role: "Curator for Lahore (2022–23) · Impact Officer (2021–22) · Davos Lab Taskforce (2021–22)",
    period: "Jan 2020 – Jun 2024",
  },
];

function Section({ label, title, children }) {
  return (
    <FadeUp>
      <div className="resume-section">
        <p className="section-label">{label}</p>
        <h2 className="resume-section-title">{title}</h2>
        {children}
      </div>
    </FadeUp>
  );
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "teaching", label: "Teaching" },
    { id: "leadership", label: "Leadership" },
  ];

  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-1" style={{ opacity: 0.09 }} />
        <div className="blob blob-3" style={{ opacity: 0.09 }} />
      </div>

      <div className="resume-page page">
        <FadeUp>
          <div className="resume-header">
            <div>
              <p className="section-label">Career & credentials</p>
              <h1 className="section-title">Resume</h1>
            </div>
            <a
              href="/resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ alignSelf: "flex-start", marginTop: "0.4rem" }}
            >
              Download PDF ↗
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="resume-tabs">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`resume-tab${activeTab === t.id ? " active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {activeTab === "experience" && (
          <FadeUp delay={120}>
            <div className="timeline">
              {experience.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-org">{e.org}</h3>
                        <p className="timeline-role">{e.role}</p>
                      </div>
                      <span className="timeline-period">{e.period}</span>
                    </div>
                    <p className="timeline-desc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        )}

        {activeTab === "education" && (
          <FadeUp delay={120}>
            <div className="timeline">
              {education.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-org">{e.school}</h3>
                        <p className="timeline-role">{e.degree}</p>
                        {e.note && <p className="timeline-note">⭐ {e.note}</p>}
                      </div>
                      <span className="timeline-period">{e.years}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        )}

        {activeTab === "teaching" && (
          <FadeUp delay={120}>
            <div className="teaching-grid">
              {teaching.map((t, i) => (
                <div className="teaching-card" key={i}>
                  <span className="teaching-school">{t.school}</span>
                  <h3 className="teaching-course">{t.course}</h3>
                  <p className="teaching-instructor">with {t.instructor}</p>
                  <span className="teaching-term">{t.term}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        )}

        {activeTab === "leadership" && (
          <FadeUp delay={120}>
            <div className="timeline">
              {leadership.map((l, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-org">{l.org}</h3>
                        <p className="timeline-role">{l.role}</p>
                      </div>
                      <span className="timeline-period">{l.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        )}
      </div>
    </>
  );
}
