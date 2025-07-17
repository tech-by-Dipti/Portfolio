import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">D</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <i className="fas fa-home"></i> Home
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            <Link to="about" smooth={true} duration={500} className="nav-link">
              <i className="fas fa-user"></i> About
            </Link>
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setIsOpen(false)} >
            <i className="fas fa-code"></i> Skills
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <i className="fas fa-phone"></i> Contact Me
          </a>
        </li>

      </div>
      

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}
