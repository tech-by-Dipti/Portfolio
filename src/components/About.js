import React from "react";
import "./About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading" data-aos="fade-up">
        About <span className="me">Me</span>{" "}
      </h2>
      <p className="about-text">
        I’m Dipti, a dedicated and detail-oriented Frontend Web Developer with a
        passion for crafting visually appealing and user-friendly websites. My
        expertise lies in developing responsive, high-performance web interfaces
        using HTML, CSS, JavaScript, and React.js.
        <br />
        <br />I believe in writing clean, efficient code and continuously
        improving both design and functionality. I'm driven by a love for
        learning and an enthusiasm for solving real-world problems through
        creative digital solutions. Whether working independently or
        collaborating in a team, I strive to bring modern, accessible, and
        impactful web experiences to life.
      </p>
    </section>
  );
}
