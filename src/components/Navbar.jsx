function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <h2>Leads Academy</h2>

      <div className="desktop-menu">
        <button onClick={() => scrollToSection("about")}>
          About
        </button>

        <button onClick={() => scrollToSection("courses")}>
          Courses
        </button>

        <button onClick={() => scrollToSection("faculty")}>
          Faculty
        </button>

        <button onClick={() => scrollToSection("achievements")}>
          Achievements
        </button>

        <button onClick={() => scrollToSection("gallery")}>
          Gallery
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;