import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
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

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/solutions">Solutions</Link>
        </li>

        <li>
          <Link to="/case-study">Case Study</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <Link to="/contact">
        <button className="consult-btn">
          Book Consultation
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;