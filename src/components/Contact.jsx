import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <span className="contact-overline">Get In Touch</span>
        <h2 className="contact-title">
          Let's Start Your Learning <span>Journey</span>
        </h2>
        <div className="contact-accent-bar"></div>

        <div className="contact-grid">
          <a href="tel:+919840823523" className="contact-card">
            <div className="contact-icon-box">☎</div>
            <div className="contact-info">
              <h3>Call Our Office</h3>
              <p>+91 98408 23523</p>
            </div>
          </a>

          <a href="https://wa.me/919840823523" className="contact-card">
            <div className="contact-icon-box">✦</div>
            <div className="contact-info">
              <h3>WhatsApp Us</h3>
              <p>Get Quick Response</p>
            </div>
          </a>
        </div>

        <div className="location-box">
          <p>📍 Industrial Estate, Ankuli Main Road, Brahmapur</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;