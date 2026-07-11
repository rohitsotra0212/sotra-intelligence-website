import Navbar from "../components/Navbar";
import "../style/about.css";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">

        {/* STORY */}

        <section className="story-section">

          <h2>About Sotra Intelligence</h2>

          <p>
            Sotra Intelligence helps businesses unlock the power
            of Artificial Intelligence through Agentic AI,
            Retrieval-Augmented Generation (RAG), workflow
            automation, and enterprise AI solutions.
          </p>

          <p>
            Our mission is to transform manual business
            operations into intelligent automated workflows
            that increase productivity, reduce costs,
            and improve customer satisfaction.
          </p>

        </section>

        {/* EXPERTISE */}

        <section className="expertise-section">

          <h2>Core Expertise</h2>

          <div className="expertise-grid">

            <div className="expertise-card">
              Agentic AI
            </div>

            <div className="expertise-card">
              LangGraph
            </div>

            <div className="expertise-card">
              Enterprise RAG
            </div>

            <div className="expertise-card">
              OpenAI
            </div>

            <div className="expertise-card">
              FastAPI
            </div>

            <div className="expertise-card">
              React
            </div>

            <div className="expertise-card">
              Python
            </div>

            <div className="expertise-card">
              Workflow Automation
            </div>

          </div>

        </section>

        {/* INDUSTRIES */}

        <section className="industry-section">

          <h2>Industries We Serve</h2>

          <div className="industry-grid">

            <div className="industry-card">
              Insurance & Claims
            </div>

            <div className="industry-card">
              Customer Support
            </div>

            <div className="industry-card">
              Healthcare
            </div>

            <div className="industry-card">
              Financial Services
            </div>

            <div className="industry-card">
              Enterprise Operations
            </div>

            <div className="industry-card">
              AI Startups
            </div>

          </div>

        </section>

        {/* FOUNDER */}

        <section className="founder-section">

          <div className="founder-card">

            <div className="founder-content">

              <span className="founder-tag">
                Founder & Lead AI Engineer
              </span>

              <h2>
                Rohit Sotra
              </h2>

              <p>
                AI Consultant, Solution Architect and Lead Engineer
                with 14+ years of experience delivering enterprise
                applications, workflow automation solutions and
                Generative AI platforms.
              </p>

              <div className="founder-highlights">

                <div className="highlight">
                  ✓ 14+ Years Enterprise Experience
                </div>

                <div className="highlight">
                  ✓ Agentic AI & LangGraph Specialist
                </div>

                <div className="highlight">
                  ✓ Enterprise RAG Architect
                </div>

                <div className="highlight">
                  ✓ FastAPI & React Solutions
                </div>

                <div className="highlight">
                  ✓ OpenAI & LLM Applications
                </div>

                <div className="highlight">
                  ✓ Workflow Automation Expert
                </div>

              </div>

            </div>

          </div>

        </section>        

      </div>

      <Footer />
    </>
  );
}

export default About;