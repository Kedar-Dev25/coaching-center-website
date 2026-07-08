import React, { useState } from 'react';
import '../App.css';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const images = [];
  for (let i = 1; i <= 21; i++) {
    images.push(`/Gallery/Gallery (${i}).jpeg`);
  }

  return (
    <section className="gallery-section"id="gallery">
        <span className="overline">- ACADEMY GALLERY</span>
      <h2 className="section-title">Life Out of <span>Academy</span></h2>
      {/* showAll true hone par 'show-all' class add hogi */}
      <div className={`masonry-grid ${showAll ? 'show-all' : ''}`}>
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt="Academy Moment" />
          </div>
        ))}
      </div>

      {/* Button container */}
      <div className="view-more-container">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="view-more-btn"
        >
          {showAll ? 'Show Less' : 'View All Gallery'}
        </button>
      </div>
    </section>
  );
};

export default Gallery;