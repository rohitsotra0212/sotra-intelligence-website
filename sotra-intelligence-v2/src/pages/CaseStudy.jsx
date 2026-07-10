import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

import dashboard from "../assets/admin-dashboard.JPG";
import emailProcessor from "../assets/email-processor.JPG";
import financeDashboard from "../assets/finance-dashboard.JPG";
import supportTicket from "../assets/SupportTicket.JPG";
import refundApproval from "../assets/RefundApproval_Screen.JPG";
import myTickets from "../assets/MyTickets.JPG";
import Footer from "../components/Footer";

import "../style/caseStudy.css";

function CaseStudy() {
  return (
    <>
      <Navbar />

      <div className="case-study">

        <PageHero
          tag="Featured Enterprise AI Solution"
          title="AI-Powered Customer Service & Claims Automation Platform"
          description="A complete AI-powered solution that automates customer service, claims processing, ticket management, refund approvals, and business operations."
        />

        {/* BUSINESS CHALLENGES */}

        <section className="business-problem">

          <h2>Business Challenges</h2>

          <div className="problem-grid">

            <div className="problem-card">
              Slow Manual Ticket Processing
            </div>

            <div className="problem-card">
              High Operational Cost
            </div>

            <div className="problem-card">
              Refund Approval Bottlenecks
            </div>

            <div className="problem-card">
              SLA Violations
            </div>

          </div>

        </section>

        {/* ARCHITECTURE */}

        <section className="architecture">

          <h2>Enterprise Architecture</h2>

          <div className="architecture-grid">

            <div className="arch-card">
              Customer Email
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              FastAPI API Layer
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              LangGraph Orchestrator
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              Email Classification Agent
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card-group">

              <div className="arch-card">
                Refund Agent
              </div>

              <div className="arch-card">
                Complaint Agent
              </div>

              <div className="arch-card">
                Query Agent
              </div>

            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              Validation Engine
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              PostgreSQL Database
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              Finance Approval Workflow
            </div>

            <div className="arch-arrow">↓</div>

            <div className="arch-card">
              Customer Notification Service
            </div>

          </div>

        </section>

        {/* DASHBOARD */}

        <section className="screenshots">

          <h2>Operations Dashboard</h2>

          <img
            src={dashboard}
            alt="Operations Dashboard"
          />

          <p>
            Real-time business visibility including support
            operations, refunds, ticket status and analytics.
          </p>

        </section>

        {/* EMAIL PROCESSOR */}

        <section className="screenshots">

          <h2>AI Email Processing</h2>

          <img
            src={emailProcessor}
            alt="AI Email Processing"
          />

          <p>
            Intelligent email classification and automated
            workflow routing using Agentic AI.
          </p>

        </section>

        {/* SUPPORT TICKETS */}

        <section className="screenshots">

          <h2>Support Ticket Management</h2>

          <img
            src={supportTicket}
            alt="Support Ticket Management"
          />

          <p>
            Centralized ticket management with status tracking,
            SLA monitoring and customer communication.
          </p>

        </section>

        {/* FINANCE */}

        <section className="screenshots">

          <h2>Finance Approval Workflow</h2>

          <img
            src={financeDashboard}
            alt="Finance Dashboard"
          />

          <p>
            Human-in-the-loop approval workflow ensuring
            governance, compliance and auditability.
          </p>

        </section>

        {/* REFUND */}

        <section className="screenshots">

          <h2>Refund Approval System</h2>

          <img
            src={refundApproval}
            alt="Refund Approval"
          />

          <p>
            Automated refund validation with finance approval
            and complete audit trail.
          </p>

        </section>

        {/* CUSTOMER PORTAL */}

        <section className="screenshots">

          <h2>Customer Self-Service Portal</h2>

          <img
            src={myTickets}
            alt="Customer Portal"
          />

          <p>
            Customers can track tickets, requests,
            approvals and updates in real time.
          </p>

        </section>

        {/* RESULTS */}

        <section className="results">

          <h2>Business Impact</h2>

          <div className="result-grid">

            <div className="result-card">
              <h3>70%</h3>
              <p>Reduction in Manual Effort</p>
            </div>

            <div className="result-card">
              <h3>60%</h3>
              <p>Faster Resolution</p>
            </div>

            <div className="result-card">
              <h3>24x7</h3>
              <p>Automated Processing</p>
            </div>

            <div className="result-card">
              <h3>100%</h3>
              <p>Audit Trail Visibility</p>
            </div>

          </div>

        </section>

        {/* TECH STACK */}

        <section className="tech-stack">

          <h2>Technology Stack</h2>

          <div className="tech-grid">

            <span>LangGraph</span>
            <span>OpenAI</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>Docker</span>

          </div>

        </section>

        {/* CTA */}

        <section className="contact-cta">

          <h2>
            Interested In Similar AI Automation?
          </h2>

          <button>
            Schedule Consultation
          </button>

        </section>

      </div>
      <Footer />
    </>
  );
}

export default CaseStudy;