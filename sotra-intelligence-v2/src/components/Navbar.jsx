import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="Sotra Intelligence"
          className="nav-logo"
        />

        <span className="logo-text">
          Sotra Intelligence
        </span>
      </Link>

      {/* Desktop Menu */}

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/services">Services</Link></li>

        <li><Link to="/solutions">Solutions</Link></li>

        <li><Link to="/case-study">Case Study</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

      <Link to="/contact" className="desktop-btn">
        <button className="consult-btn">
          Book Consultation
        </button>
      </Link>

      {/* Mobile Hamburger */}

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </Link>

          <Link to="/case-study" onClick={() => setMenuOpen(false)}>
            Case Study
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;