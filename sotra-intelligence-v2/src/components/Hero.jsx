import logo from "../assets/logo.PNG";
import dashboard from "../assets/admin-dashboard.JPG";
import { Link } from "react-router-dom";
import "../style/hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <span className="tag">
          Enterprise AI & Automation Solutions
        </span>

        <h1>
          Transforming Business Operations Through Agentic AI
        </h1>

        <p>
          We design and build enterprise-grade AI systems that automate
          customer service, claims processing, workflow orchestration,
          knowledge management, and business operations using Agentic AI,
          Enterprise RAG, and intelligent automation.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Schedule Free AI Assessment
          </button>

          <Link to="/case-study">
            <button className="secondary-btn">
              View Case Study
            </button>
          </Link>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div className="dashboard-card">

          <div className="dashboard-glow"></div>

          <div className="hero-logo-section">

            <img
              src={logo}
              alt="Sotra Intelligence"
              className="hero-logo"
            />

            <div className="product-badge">
              Featured Enterprise Solution
            </div>

            <h3 className="product-title">
              AI-Powered Customer Service &
              Claims Automation Platform
            </h3>

            <p className="product-subtitle">
              Built with Agentic AI, LangGraph,
              FastAPI, React and PostgreSQL
            </p>

          </div>

          <div className="dashboard-wrapper">

            <img
              src={dashboard}
              alt="Claims Automation Dashboard"
              className="dashboard-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
