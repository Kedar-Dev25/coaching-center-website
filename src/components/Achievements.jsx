import Toppers10 from "../assets/Toppers10.jpeg";
import Toppers11 from "../assets/Toppers11.jpeg";
import "../App.css";


function Achievements() {
  return (
    <section className="achievements-section"id="achievements">
      {/* Header Part */}
<div className="section-header">
  <span className="overline">- OUR MILESTONES</span>
  <h2 className="premium-heading">
    Proven <span>Excellence</span>
  </h2>
  <div className="accent-bar"></div>
</div>

      <div className="achievements-container">
        <div className="achievement-card">
          <img src={Toppers10} alt="10th Toppers" />
          <div className="card-overlay">
            <h3>HSC Excellence</h3>
            <p>Our top scorers in 10th Board Exams</p>
          </div>
        </div>

        <div className="achievement-card">
          <img src={Toppers11} alt="Academic Achievements" />
          <div className="card-overlay">
            <h3>Academic Milestones</h3>
            <p>Proven track record of excellence since 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;