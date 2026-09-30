import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import CountUp from "./CountUp";

const FEATURES = [
  {
    icon: "book",
    title: "Concept-First Teaching",
    text: "Every topic broken down from foundation up — building intuition, not memorization.",
  },
  {
    icon: "users",
    title: "Small Batches",
    text: "Limited seats per batch ensure every student gets personal attention from our mentors.",
  },
  {
    icon: "target",
    title: "Outcome Driven",
    text: "Weekly tests, performance analytics, and 1-on-1 reviews keep progress measurable.",
  },
  {
    icon: "heart",
    title: "Mentorship",
    text: "Beyond marks — we shape character, confidence, and curiosity in every learner.",
  },
];

const COUNTERS = [
  { value: "12+", label: "Years" },
  { value: "40+", label: "Educators" },
  { value: "10K+", label: "Alumni" },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* STORY & IMAGE */}
        <div className="about-hero-block">
          <div className="about-left-story">
            <SectionHeader
              overline="About The Academy"
              title={
                <>
                  A modern home for <br />
                  <span>curious minds.</span>
                </>
              }
            />

            <p className="about-story-p">
              Founded in 2014 by educator <strong>Priya Ranjan Nayak</strong>, Leads Academy
              began as a small classroom of 12 students. Today, it stands as one of the
              region's most <span className="trust-badge-text">trusted institutions</span>{" "}
              &mdash; known for its{" "}
              <span className="premium-highlight">rigorous academic culture</span>,
              world-class faculty, and personalized mentoring approach.
            </p>

            <p className="about-philosophy-p">
              Our philosophy is simple: meet each student where they are, and guide them to
              where they want to be.
            </p>

            <div className="about-counters-row">
              {COUNTERS.map((c) => (
                <div className="counter-stat" key={c.label}>
                  <h3>
                    <CountUp value={c.value} />
                  </h3>
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right-media">
            <div className="about-frame-wrapper">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Students studying together at Leads Academy"
                className="about-premium-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="about-features-grid">
          {FEATURES.map((f) => (
            <div className="feature-glass-node" key={f.title}>
              <div className="node-icon-box">
                <Icon name={f.icon} size={20} />
              </div>
              <div className="node-text">
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
