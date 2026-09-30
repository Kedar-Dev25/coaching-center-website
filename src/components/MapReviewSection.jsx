import "../App.css";
import SectionHeader from "./SectionHeader";

const MapReviewSection = () => {
  return (
    <section className="map-review-section">
      <SectionHeader
        overline="Find Our Campus"
        title={
          <>
            Visit Us <span>Today</span>
          </>
        }
      />

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.528713641499!2d84.81728760896671!3d19.302850644739976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d5b1b36d79229%3A0x7e86009a762db04f!2sLeads%20Academy!5e0!3m2!1sen!2sin!4v1785572878632!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Leads Academy Location"
        />
      </div>
    </section>
  );
};

export default MapReviewSection;
