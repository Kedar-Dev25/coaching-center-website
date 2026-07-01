function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <span className="badge">Success Stories</span>
          <h2>Beyond The Classroom</h2>
        </div>

        <div className="masonry-grid">
          {/* Card 1: Photo based achievement */}
          <div className="masonry-card photo-card">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Student Award" />
            <div className="overlay-text">
              <h4>State Toppers</h4>
              <p>Top ranks in board exams</p>
            </div>
          </div>

          {/* Card 2: Stats based */}
          <div className="masonry-card stat-card">
            <h3>10K+</h3>
            <p>Students Enrolled</p>
          </div>

          {/* Card 3: Stats based */}
          <div className="masonry-card stat-card">
            <h3>100%</h3>
            <p>Success Rate</p>
          </div>

          {/* Card 4: Photo based achievement */}
          <div className="masonry-card photo-card">
            <img src="https://images.unsplash.com/photo-1577896851231-70e18836d5f2" alt="Faculty" />
            <div className="overlay-text">
              <h4>Expert Faculty</h4>
              <p>Years of industry experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;