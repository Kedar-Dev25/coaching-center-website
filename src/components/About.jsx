import "../App.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* UPPER MAIN LAYOUT: STORY & IMAGE */}
        <div className="about-hero-block">
          <div className="about-left-story">
            <span className="about-academy-badge">&mdash; About The Academy</span>
            <h2 className="about-main-heading">
              A modern home for <br />
              <span className="highlight-text-italic">curious minds.</span>
            </h2>
            
            <p className="about-story-p">
            Founded in 2014 by educator <strong>Priya Ranjan Nayak</strong>, Leads Academy began 
            as a small classroom of 12 students. Today, it stands as one of the region's most 
            <span className="trust-badge-text">trusted institutions</span> &mdash; known for its 
            <span className="premium-highlight">rigorous academic culture</span>, world-class 
            faculty, and personalized mentoring approach.
            </p>
            
            <p className="about-philosophy-p">
              Our philosophy is simple: meet each student where they are, and guide them to 
              where they want to be.
            </p>

            {/* LIVE PREMIUM COUNTERS */}
            <div className="about-counters-row">
              <div className="counter-stat">
                <h3>12+</h3>
                <p>Years</p>
              </div>
              <div className="counter-stat">
                <h3>40+</h3>
                <p>Educators</p>
              </div>
              <div className="counter-stat">
                <h3>10K+</h3>
                <p>Alumni</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: HERO STOCK STUDIO IMAGE */}
          <div className="about-right-media">
            <div className="about-frame-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Students studying together at Leads Academy" 
                className="about-premium-img"
              />
            </div>
          </div>
        </div>

        {/* LOWER GRID: THE 4 ICONIC FEATURE CARDS */}
        <div className="about-features-grid">
          
          <div className="feature-glass-node">
            <div className="node-icon-box">📖</div>
            <h4>Concept-First Teaching</h4>
            <p>Every topic broken down from foundation up &mdash; building intuition, not memorization.</p>
          </div>

          <div className="feature-glass-node">
            <div className="node-icon-box">👥</div>
            <h4>Small Batches</h4>
            <p>Limited seats per batch ensure every student gets personal attention from our mentors.</p>
          </div>

          <div className="feature-glass-node">
            <div className="node-icon-box">🎯</div>
            <h4>Outcome Driven</h4>
            <p>Weekly tests, performance analytics, and 1-on-1 reviews keep progress measurable.</p>
          </div>

          <div className="feature-glass-node">
            <div className="node-icon-box">💛</div>
            <h4>Mentorship</h4>
            <p>Beyond marks &mdash; we shape character, confidence, and curiosity in every learner.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;