import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PHRASES = [
  { text: "مرحباً!", rtl: true },
  { text: "data storyteller.", rtl: false },
  { text: "policy researcher.", rtl: false },
  { text: "السلام علیکم!", rtl: true },
  { text: "Lahore → Chicago.", rtl: false },
  { text: "closing the gap.", rtl: false },
];

function useTypewriter(phrases) {
  const [display, setDisplay] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const phrase = phrases[pi].text;
    const delay = del ? 50 : ci === phrase.length ? 1800 : 85;
    const timer = setTimeout(() => {
      if (!del && ci < phrase.length) {
        setDisplay(phrase.slice(0, ci + 1));
        setCi(c => c + 1);
      } else if (!del) {
        setDel(true);
      } else if (ci > 0) {
        setDisplay(phrase.slice(0, ci - 1));
        setCi(c => c - 1);
      } else {
        setDel(false);
        setPi(p => (p + 1) % phrases.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [ci, del, pi, phrases]);

  return { display, rtl: phrases[pi].rtl };
}

function FadeCard({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
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

export default function Home() {
  const { display, rtl } = useTypewriter(PHRASES);

  return (
    <>
      <div className="blob-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <section className="hero page">
        <p className="hero-greeting">Data • Policy • Community</p>
        <h1 className="hero-name">Hi, I'm <span>Mariam</span></h1>
        <div className="hero-typewriter">
          <span className="typewriter-prefix">I'm a&nbsp;</span>
          <span
            className="typewriter-text"
            dir={rtl ? "rtl" : "ltr"}
            style={{ fontFamily: rtl ? "'Noto Nastaliq Urdu', serif" : "inherit" }}
          >
            {display}
          </span>
          <span className="cursor" />
        </div>
        <p className="hero-desc">
          Data exists everywhere, but families, teachers, and communities rarely get it in ways
          that help them act. I try to fix that — by building dashboards, designing surveys,
          writing issue briefs, whatever closes the gap between analysis and action.
        </p>
        <div className="hero-ctas">
          <Link to="/research" className="btn-primary">See my work</Link>
          <Link to="/about" className="btn-secondary">About me</Link>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      <section className="highlights">
        {[
          { icon: "🏫", label: "Education Data", desc: "CPS dashboards & school choice tools for Chicago families" },
          { icon: "🌍", label: "Global Impact", desc: "M&E consulting for programs in Liberia, Pakistan, and beyond" },
          { icon: "📊", label: "Policy Research", desc: "Early childhood, EdTech, climate, & economic vulnerability" },
          { icon: "✍️", label: "Public Writing", desc: "Op-eds in Crain's, WEF Agenda, LSE, Nature Medicine" },
        ].map((h, i) => (
          <FadeCard key={h.label} delay={i * 100}>
            <div className="highlight-card">
              <div className="highlight-icon">{h.icon}</div>
              <h3>{h.label}</h3>
              <p>{h.desc}</p>
            </div>
          </FadeCard>
        ))}
      </section>
    </>
  );
}
