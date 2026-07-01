import { useState } from "react";
import "../App.css";

function Hero() {
  const [activeTab, setActiveTab] = useState("explore");

  const handleScroll = (sectionId, tabName) => {
    setActiveTab(tabName);
    
    // 350ms delay taaki slide animation smooth dikhe
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 350);
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-text">
          Learn Today, Lead <span className="highlight-text">Tomorrow.</span>
        </h1>
        <p className="hero-subtext">
          Personalized coaching, modern teaching methods, and a legacy of toppers — 
          Leads Academy is where ambition meets excellence.
        </p>
        
        {/* 🔥 RESPONSIVE ADAPTIVE SWITCHER */}
        <div className="premium-capsule-switcher">
          {/* Slider Pill - Desktop pe left-right chalega, Mobile pe upar-niche */}
          <div className={`capsule-slider-pill ${activeTab === "mentor" ? "slide-active" : ""}`}></div>
          
          <button 
            onClick={() => handleScroll("courses", "explore")} 
            className={`capsule-tab-btn ${activeTab === "explore" ? "is-active" : ""}`}
          >
            Explore Courses <span className="arrow">&rarr;</span>
          </button>
          
          <button 
            onClick={() => handleScroll("contact", "mentor")} 
            className={`capsule-tab-btn ${activeTab === "mentor" ? "is-active" : ""}`}
          >
            Talk to a Mentor
          </button>
        </div>
      </div>

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