import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h3>Sotra Intelligence</h3>

          <p>
            Enterprise AI & Automation Solutions
          </p>

          <p>
            Agentic AI, Enterprise RAG,
            Workflow Automation and Business Process
            Transformation Solutions.
          </p>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            📧 rohit.sotra0212@gmail.com 📱 +91-9650278557
          </p>

          <Link to="https://www.linkedin.com/in/rohit-sotra-5a1120126/">
            <p>
              🔗 LinkedIn
            </p>
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Sotra Intelligence. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;