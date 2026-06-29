import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/research", label: "Research & Projects" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mariam Raheem</div>
      <div className={`navbar-links${open ? " open" : ""}`}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={location.pathname === l.to ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <button className="navbar-burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navbar;
