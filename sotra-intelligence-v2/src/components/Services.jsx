import Navbar from "../components/Navbar";
import "../style/services.css";

function Services() {
  return (
    <>
      <Navbar />

      <div className="services-page">

        <section className="services-hero">

          <span className="services-tag">
            Enterprise AI Services
          </span>

          <h1>
            Enterprise AI Solutions For Modern Businesses
          </h1>

          <p>
            We help businesses automate operations,
            reduce costs, improve customer experience,
            and accelerate growth using Generative AI,
            Agentic AI, Enterprise RAG, and Workflow Automation.
          </p>

        </section>

        <section className="service-grid">

          <div className="service-card">
            <h2>Agentic AI Solutions</h2>

            <p>
              Autonomous AI systems capable of
              decision-making and business process execution.
            </p>

            <ul>
              <li>Multi-Agent Systems</li>
              <li>LangGraph Workflows</li>
              <li>Human-in-the-Loop</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Enterprise RAG</h2>

            <p>
              Build enterprise knowledge assistants
              powered by internal documents.
            </p>

            <ul>
              <li>Vector Databases</li>
              <li>Document Intelligence</li>
              <li>Semantic Search</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Workflow Automation</h2>

            <p>
              Automate repetitive business operations.
            </p>

            <ul>
              <li>Claims Processing</li>
              <li>Customer Support</li>
              <li>Approval Workflows</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>AI Consulting</h2>

            <p>
              Strategy, architecture, roadmap,
              and implementation support.
            </p>

            <ul>
              <li>AI Assessment</li>
              <li>PoC Development</li>
              <li>Enterprise Rollout</li>
            </ul>
          </div>

        </section>

      </div>
    </>
  );
}

export default Services;