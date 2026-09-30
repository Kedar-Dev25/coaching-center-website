import { useState } from "react";
import Toppers10 from "../assets/Toppers10.jpeg";
import Toppers11 from "../assets/Toppers11.jpeg";
import "../App.css";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import Lightbox from "./Lightbox";

const ITEMS = [
  {
    src: Toppers10,
    alt: "10th Toppers",
    title: "HSC Excellence",
    text: "Our top scorers in 10th Board Exams",
  },
  {
    src: Toppers11,
    alt: "Academic Achievements",
    title: "Academic Milestones",
    text: "Proven track record of excellence since 2017",
  },
];

function Achievements() {
  const [active, setActive] = useState(null);

  return (
    <section className="achievements-section" id="achievements">
      <SectionHeader
        overline="Our Milestones"
        title={
          <>
            Proven <span>Excellence</span>
          </>
        }
      />

      <div className="achievements-container">
        {ITEMS.map((item, i) => (
          <div className="achievement-card" key={item.title}>
            <button
              type="button"
              className="achievement-media"
              onClick={() => setActive(i)}
              aria-label={`View ${item.title} larger`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="zoom-hint">
                <Icon name="expand" size={16} />
              </span>
            </button>
            <div className="card-overlay">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          items={ITEMS}
          index={active}
          onChange={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

export default Achievements;
