import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;