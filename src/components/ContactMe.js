import React, { useRef, useEffect } from "react";
import "./ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcm5mz8",     // Replace with your EmailJS Service ID
        "template_3i878v6",    // Replace with your EmailJS Template ID
        form.current,
        "okRveV7xrUTprp4tl"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );

    e.target.reset(); // Clear form after submit
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading" data-aos="fade-up">
        Contact <span className="me">Me</span>
      </h2>
      <p className="contact-subtext">
        Have a project or just want to say hi? Feel free to reach out!
      </p>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="title" value="New Message from Portfolio" />
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="tel" name="user_phone" placeholder="Your Mobile Number (optional)" />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

