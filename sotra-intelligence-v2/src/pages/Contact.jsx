import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        <section className="contact-hero">

          <span className="contact-tag">
            Let's Talk AI
          </span>

          <h1>
            Book A Free Consultation
          </h1>

          <p>
            Tell us about your business challenge and
            we'll explore how AI can help automate,
            optimize, and scale your operations.
          </p>

        </section>

        <section className="contact-container">

          {/* FORM */}

          <div className="contact-form-card">

            <h2>Send Inquiry</h2>

            <form
              action="https://formspree.io/f/xkoldzky"
              method="POST"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Describe your project requirements..."
                required
              ></textarea>

              <button type="submit">
                Submit Inquiry
              </button>

            </form>

          </div>

          {/* INFO */}

          <div className="contact-info">

            <h2>Sotra Intelligence</h2>

            <p>
              Enterprise AI & Automation Solutions
            </p>

            <div className="contact-services">

              <div>✓ Agentic AI Solutions</div>

              <div>✓ Enterprise RAG</div>

              <div>✓ Workflow Automation</div>

              <div>✓ AI Consulting</div>

              <div>✓ LangGraph Solutions</div>

            </div>

            <div className="contact-details">

              <h3>Email</h3>

              <p>
                <a href="mailto:rohit.sotra0212@gmail.com">
                  rohit.sotra0212@gmail.com
                </a>
              </p>

              <h3>LinkedIn</h3>

              <p>
                <a
                  href="https://www.linkedin.com/in/rohit-sotra-5a1120126"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rohit Sotra
                </a>
              </p>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default Contact;