import { useState, useEffect } from "react";
import "../App.css";
import Icon from "./Icon";
import { PHONE_TEL } from "../config";

const MENU_ITEMS = [
  "about",
  "courses",
  "faculty",
  "achievements",
  "gallery",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 300) setActive("");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const sections = MENU_ITEMS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Close menu when tapping outside */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)}></div>}

      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="brand" onClick={scrollToTop} aria-label="Leads Academy home">
          <span className="brand-mark">L</span>
          <span className="brand-name">Leads Academy</span>
        </a>

        <nav className={`menu-items ${open ? "show" : ""}`} aria-label="Main">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              className={active === item ? "is-active" : ""}
              aria-current={active === item ? "true" : undefined}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={`tel:${PHONE_TEL}`} className="call-btn">
            <Icon name="phone" size={16} />
            <span>Call Us</span>
          </a>

          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
