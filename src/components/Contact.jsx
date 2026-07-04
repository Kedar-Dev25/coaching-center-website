import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h2 className="contact-title">Let’s Start the Journey</h2>
        <p className="contact-sub">Have questions? Our mentors are here to guide you.</p>

        <div className="contact-grid">
          <a href="tel:+919840823523" className="contact-card">
            <span className="icon">📞</span>
            <h3>Call Us</h3>
            <p>+91 98408 23523</p>
          </a>
          
          <a href="https://wa.me/919840823523" className="contact-card">
            <span className="icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Quick Response</p>
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