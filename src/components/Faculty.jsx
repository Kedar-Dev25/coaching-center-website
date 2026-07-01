import { useState } from 'react';
import '../App.css';
import directorImg from '../assets/director.jpg';

function Faculty() {
  const [activeTab, setActiveTab] = useState('director');

  return (
    <section className="faculty-section">
      <div className="toggle-wrapper">
        <div className="toggle-container">
          <div className={`active-pill ${activeTab === 'teachers' ? 'slide-right' : ''}`}></div>
          <button className={activeTab === 'director' ? 'active' : ''} onClick={() => setActiveTab('director')}>
            Meet The Director
          </button>
          <button className={activeTab === 'teachers' ? 'active' : ''} onClick={() => setActiveTab('teachers')}>
            Meet The Teachers
          </button>
        </div>
      </div>

      <div className="content-area">
        {activeTab === 'director' ? (
          <div className="director-card">
<img src={directorImg} alt="Director" /> 
            <div className="content">
              <h3>Priya Ranjan Nayak</h3>
              <span className="badge">Founder & Lead Educator</span>
              <p>A mentor who believes every child can excel. We don't just teach subjects; we cultivate thinkers, doers and dreamers.</p>
            </div>
          </div>
        ) : (
          <div className="teachers-grid">
            {[1, 2, 3].map((t) => (
              <div className="teacher-card" key={t}>
                <img src="image_0bf07b.jpg" alt="Teacher" />
                <h4>Expert Educator</h4>
                <p>Mathematics Specialist</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Faculty;