import { useState } from "react";
import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import Lightbox from "./Lightbox";

// [width, height] of each photo. Passing them to <img> lets the browser reserve the
// right space before the file loads, so the masonry does not jump around.
const SIZES = [
  [1213, 1600],
  [1204, 1600],
  [1213, 1600],
  [1204, 1600],
  [1204, 1600],
  [960, 1280],
  [718, 461],
  [1280, 572],
  [960, 1280],
  [1600, 1204],
  [1213, 1600],
  [1213, 1600],
  [1213, 1600],
  [1200, 1600],
  [1213, 1600],
  [1280, 960],
  [963, 1280],
  [1599, 899],
  [1204, 1600],
  [1600, 1204],
  [780, 1040],
];

const IMAGES = SIZES.map(([width, height], i) => ({
  src: `/Gallery/Gallery (${i + 1}).jpeg`,
  alt: `Leads Academy campus moment ${i + 1}`,
  width,
  height,
}));

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <SectionHeader
        overline="Academy Gallery"
        title={
          <>
            Life Out of <span>Academy</span>
          </>
        }
      />

      <div className={`masonry-wrap ${showAll ? "expanded" : ""}`}>
        <div className={`masonry-grid ${showAll ? "show-all" : ""}`}>
          {IMAGES.map((img, index) => (
            <button
              type="button"
              key={img.src}
              className="gallery-item"
              onClick={() => setActive(index)}
              aria-label={`Open photo ${index + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="view-more-container">
        <button
          onClick={() => {
            setShowAll((prev) => !prev);
            if (showAll) {
              document.getElementById("gallery")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="btn btn-primary view-more-btn"
        >
          {showAll ? "Show Less" : "View All Gallery"}
          <Icon name="arrow-right" size={18} className={showAll ? "flip-up" : "flip-down"} />
        </button>
      </div>

      {active !== null && (
        <Lightbox
          items={IMAGES}
          index={active}
          onChange={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
