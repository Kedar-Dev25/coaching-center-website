import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        <span className="contact-tag">
          CONTACT
        </span>

        <h2 className="contact-title">
          Let's Start Your Learning Journey
        </h2>

        <p className="contact-sub">
          Reach out to our mentors anytime. We're here to answer your questions
          and guide you toward the right course.
        </p>

        <div className="contact-grid">

          <a href="tel:+919840823523" className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 98408 23523</p>
            </div>

          </a>

          <a
            href="https://wa.me/919840823523"
            className="contact-card"
          >

            <div className="contact-icon">
              ✦
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p>Quick Response</p>
            </div>

          </a>

        </div>

        <div className="location-box">
          Industrial Estate, Ankuli Main Road, Brahmapur
        </div>

      </div>
    </section>
  );
};

export default Contact;