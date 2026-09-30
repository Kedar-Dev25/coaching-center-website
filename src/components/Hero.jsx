import "../App.css";
import Icon from "./Icon";
import CountUp from "./CountUp";

const STATS = [
  { value: "94%", label: "Highest Board Score" },
  { value: "100%", label: "Success Rate" },
  { value: "10+", label: "Expert Faculty" },
];

function Hero() {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-section" id="top">
      {/* Background Decorative Glow Spheres */}
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>

      <div className="hero">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-left">
          <div className="admission-badge">
            <span className="live-dot"></span>
            <span className="badge-text">Admissions Open 2026–27</span>
          </div>

          <h1 className="hero-text">
            Learn Today, <br className="hero-break" />
            <span className="lead-tomorrow-group">
              Lead <span className="highlight-text">Tomorrow.</span>
            </span>
          </h1>

          <p className="hero-subtext">
            Personalized coaching for Class 4th – 10th & 12th. Interactive batch learning and a proven legacy of board toppers.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("courses")}>
              Explore Courses <Icon name="arrow-right" size={18} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
              Talk to a Mentor
            </button>
          </div>

          {/* Social Proof / Trust Bar */}
          <div className="hero-trust-bar">
            <div className="student-avatars">
              <span className="avatar av-1">👨‍🎓</span>
              <span className="avatar av-2">👩‍🎓</span>
              <span className="avatar av-3">👨‍🏫</span>
            </div>
            <div className="trust-text">
              <div className="stars">★★★★★</div>
              <p>Trusted by <strong>500+ Students</strong> in Odisha</p>
            </div>
          </div>
        </div>

        {/* Right Column: High Contrast Showcase */}
        <div className="hero-right">
          <div className="hero-visual-wrapper">

            {/* Floating Top Card: High Contrast Topper Badge */}
            <div className="floating-card topper-card">
              <div className="card-badge">🏆 TOPPER SPOTLIGHT</div>
              <div className="topper-info">
                <h4>98.4% Score</h4>
                <p>Class 10th Board 2025</p>
              </div>
            </div>

            {/* Main Showcase Glass Card */}
            <div className="main-glass-card">
              <div className="glass-header">
                <span className="status-indicator"></span>
                <span>Top Board Results</span>
              </div>

              {/* Class 4-10 & 12 Results Info */}
              <div className="interactive-preview">
                <div className="subject-pill">Class 4th – 10th & 12th</div>
                <h3>Proven Academic Excellence</h3>
                <p className="formula-preview">Class 10th: 98.4% | Class 12th: 96.2%</p>
              </div>

              {/* Stats Block */}
              <div className="features-glass-card">
                {STATS.map((stat) => (
                  <div className="stat-box" key={stat.label}>
                    <h3>
                      <CountUp value={stat.value} />
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Bottom Card: Mentor Badge */}
            <div className="floating-card mentor-card">
              <div className="mentor-avatar">👨‍🏫</div>
              <div className="mentor-text">
                <strong>1-on-1 Mentorship</strong>
                <span>Personalized doubt solving</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;