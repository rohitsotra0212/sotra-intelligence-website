import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import "../style/solutions.css";
import Footer from "../components/Footer";

function Solutions() {
  return (
    <>
      <Navbar />

      <div className="solutions-page">

        <PageHero
          tag="Enterprise AI Solutions"
          title="AI Solutions Built For Real Business Problems"
          description="We design and deploy enterprise-grade AI solutions that automate operations, improve customer experience, reduce costs, and accelerate business growth."
        />

        <section className="solution-grid">

          <div className="solution-card">
            <h2>Claims Automation</h2>

            <p>
              Automate claims intake, validation,
              approvals, and customer communication.
            </p>

            <ul>
              <li>Insurance Claims</li>
              <li>Refund Processing</li>
              <li>Approval Workflow</li>
            </ul>
          </div>

          <div className="solution-card">
            <h2>Customer Service AI</h2>

            <p>
              Intelligent support automation using
              Agentic AI and workflow orchestration.
            </p>

            <ul>
              <li>Ticket Classification</li>
              <li>Email Processing</li>
              <li>SLA Management</li>
            </ul>
          </div>

          <div className="solution-card">
            <h2>AI Knowledge Assistant</h2>

            <p>
              Enterprise search and knowledge retrieval
              powered by RAG.
            </p>

            <ul>
              <li>Policy Search</li>
              <li>Document Q&A</li>
              <li>Knowledge Base</li>
            </ul>
          </div>

          <div className="solution-card">
            <h2>Document Intelligence</h2>

            <p>
              Extract, classify and process business
              documents automatically.
            </p>

            <ul>
              <li>Invoices</li>
              <li>Contracts</li>
              <li>Reports</li>
            </ul>
          </div>

          <div className="solution-card">
            <h2>Healthcare Automation</h2>

            <p>
              Automate appointments, patient records,
              and healthcare workflows.
            </p>

            <ul>
              <li>Appointment Management</li>
              <li>Patient Tracking</li>
              <li>Vaccination Records</li>
            </ul>
          </div>

          <div className="solution-card">
            <h2>AI Workflow Automation</h2>

            <p>
              End-to-end workflow automation across
              departments and business functions.
            </p>

            <ul>
              <li>Approvals</li>
              <li>Notifications</li>
              <li>Task Routing</li>
            </ul>
          </div>

        </section>

      </div>
      <Footer />
    </>
  );
}

export default Solutions;