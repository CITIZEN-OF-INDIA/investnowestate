import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => scrollTo("home")}>
          <span className="navbar__logo-text">InvestNow</span>
          <span className="navbar__logo-accent"> Estate</span>
        </div>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <li><button onClick={() => scrollTo("home")}>Home</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("services")}>Services</button></li>
          <li><button onClick={() => scrollTo("properties")}>Properties</button></li>
          <li><button onClick={() => scrollTo("testimonials")}>Testimonials</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
