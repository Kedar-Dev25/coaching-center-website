import { useState } from "react";
import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import directorImg from "../assets/DirectorImg.jpeg";

function Faculty() {
  const [activeTab, setActiveTab] = useState("director");

  return (
    <section className="faculty-section" id="faculty">
      <SectionHeader
        overline="Our Mentors"
        title={
          <>
            Meet the people <span>behind the results.</span>
          </>
        }
      />

      <div className="toggle-wrapper">
        <div className="toggle-container" role="tablist">
          <div className={`active-pill ${activeTab === "teachers" ? "slide-right" : ""}`}></div>
          <button
            role="tab"
            aria-selected={activeTab === "director"}
            className={activeTab === "director" ? "active" : ""}
            onClick={() => setActiveTab("director")}
          >
            Meet The Director
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "teachers"}
            className={activeTab === "teachers" ? "active" : ""}
            onClick={() => setActiveTab("teachers")}
          >
            Meet The Teachers
          </button>
        </div>
      </div>

      <div className="content-area">
        {activeTab === "director" ? (
          <div className="director-card panel-in">
            <img src={directorImg} alt="Priya Ranjan Nayak, Director" loading="lazy" />
            <div className="content">
              <h3>Priya Ranjan Nayak</h3>
              <span className="badge">Founder & Lead Educator</span>
              <p>
                A mentor who believes every child can excel. We don't just teach subjects; we
                cultivate thinkers, doers and dreamers.
              </p>
            </div>
          </div>
        ) : (
          <div className="teachers-grid panel-in">
            {[1, 2, 3].map((t) => (
              <div className="teacher-card" key={t}>
                <div className="teacher-avatar">
                  <Icon name="cap" size={26} />
                </div>
                <div className="teacher-text">
                  <h4>Expert Educator</h4>
                  <p>Mathematics Specialist</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Faculty;
