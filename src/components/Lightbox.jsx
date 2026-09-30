import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

// Full-screen image viewer: Esc / arrows on desktop, swipe on mobile.
function Lightbox({ items, index, onClose, onChange }) {
  const touchStartX = useRef(null);
  const total = items.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onChange((index + 1) % total);
      else if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, total, onClose, onChange]);

  const step = (dir) => onChange((index + dir + total) % total);

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const item = items[index];

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="lb-btn lb-close"
        aria-label="Close"
        autoFocus
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <Icon name="x" size={22} />
      </button>

      {total > 1 && (
        <button
          className="lb-btn lb-prev"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            step(-1);
          }}
        >
          <Icon name="chevron-left" size={24} />
        </button>
      )}

      <img
        key={item.src}
        className="lb-img"
        src={item.src}
        alt={item.alt}
        onClick={(e) => e.stopPropagation()}
      />

      {total > 1 && (
        <button
          className="lb-btn lb-next"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            step(1);
          }}
        >
          <Icon name="chevron-right" size={24} />
        </button>
      )}

      {total > 1 && (
        <div className="lb-count">
          {index + 1} / {total}
        </div>
      )}
    </div>,
    document.body
  );
}

export default Lightbox;
