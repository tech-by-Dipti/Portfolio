import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HeroSection.css";
import kuchu from "../assets/kuchu.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="welcome">Welcome to My Site</p>
        <h2>
          Hi, I'm <span className="name">Dipti Manna</span>, a{" "}
          <span className="passion">Frontend Web Developer</span>
        </h2>
        <p>I design and build responsive websites with React.js</p>
        <div className="hero-button">
          <a href="#contact" className="hireme">
            Hire Me!
          </a>
          <a
            href="/Dipti_Manna.pdf" // path to your CV file
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            View CV <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={kuchu} alt="hero" />
      </div>
    </section>
  );
}
