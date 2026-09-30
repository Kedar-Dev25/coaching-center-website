import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // low threshold so tall sections on phones still reveal reliably
      { threshold: 0.06 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
