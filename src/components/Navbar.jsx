import { useState, useEffect } from "react";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const menuItems = [
    "about",
    "courses",
    "faculty",
    "achievements",
    "gallery",
    "contact",
  ];
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
    <h3>Leads Academy</h3>

  <div className={`menu-items ${open ? "show" : ""}`}>
    {menuItems.map((item) => (
      <button key={item} onClick={() => scrollToSection(item)}>
        {item}
      </button>
    ))}
  </div>

<a href="tel:9876543210" className="call-btn">
  Call Us
</a>

    {/* Purane button ko isse replace kardo */}
<button className={`menu-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle Menu">
  <span className="hamburger-line"></span>
  <span className="hamburger-line"></span>
  <span className="hamburger-line"></span>
</button>
  </div>


  );
}

export default Navbar;