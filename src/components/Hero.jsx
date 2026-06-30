import "../App.css";

function Hero() {
  return (
    <section className="hero">
      {/* LEFT COLUMN: TEXT CONTENT */}
      <div className="hero-left">
        <h1 className="hero-text"> {/* FIX: Iska naam uniform rakha */}
          Learn Today, Lead <span className="highlight-text">Tomorrow.</span>
        </h1>
        <p className="hero-subtext">
          Personalized coaching, modern teaching methods, and a legacy of toppers — 
          Leads Academy is where ambition meets excellence.
        </p>
        
        {/* EMERGENT STYLE DUAL BUTTON CONTAINER */}
        <div className="hero-cta-buttons">
          <button className="explore-btn">
            Explore Courses <span className="arrow">&rarr;</span>
          </button>
          <a href="#contact" className="mentor-btn">
            Talk to a Mentor
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: STATS CARD */}
      <div className="hero-right">
        <div className="features-glass-card">
          <div className="stat-box">
            <h3>94%</h3>
            <p>Highest Board Score</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Expert Faculty</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;