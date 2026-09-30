import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { PHONE_TEL, PHONE_DISPLAY, ADDRESS, DIRECTIONS_URL, whatsappLink } from "../config";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <SectionHeader
          tone="dark"
          overline="Get In Touch"
          title={
            <>
              Let's Start Your Learning <span>Journey</span>
            </>
          }
        />

        <div className="contact-grid">
          <a href={`tel:${PHONE_TEL}`} className="contact-card">
            <div className="contact-icon-box">
              <Icon name="phone" size={22} />
            </div>
            <div className="contact-info">
              <h3>Call Our Office</h3>
              <p>{PHONE_DISPLAY}</p>
            </div>
            <Icon name="arrow-right" size={18} className="contact-arrow" />
          </a>

          <a
            href={whatsappLink("Hi Leads Academy, I'd like to know more about admissions.")}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon-box">
              <Icon name="message" size={22} />
            </div>
            <div className="contact-info">
              <h3>WhatsApp Us</h3>
              <p>Get Quick Response</p>
            </div>
            <Icon name="arrow-right" size={18} className="contact-arrow" />
          </a>
        </div>

        <div className="location-box">
          <div className="location-text">
            <Icon name="pin" size={20} />
            <p>{ADDRESS}</p>
          </div>
          <a
            className="btn btn-outline-dark"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="navigation" size={16} /> Get directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
