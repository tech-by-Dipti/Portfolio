
import React, { useState, useEffect } from "react";
import "./BackBtn.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function BackBtn() {
  const [visible, setVisible] = useState(false);
   useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
    )
  );
};

