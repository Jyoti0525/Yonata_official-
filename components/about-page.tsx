interface AboutPageProps {
  isActive: boolean
}

export default function AboutPage({ isActive }: AboutPageProps) {
  return (
    <div id="about" className={`page ${isActive ? "active" : ""}`}>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          AI Experts Building the Future of Business Intelligence
        </h1>

        <section className="section-dark" style={{ textAlign: "center" }}>
          <h2>Our Mission</h2>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            To bridge the gap between powerful AI tools and real business solutions for companies that can't afford
            enterprise consulting but need more than cookie-cutter software.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>The Problem We Solve:</h3>
          <p style={{ marginBottom: "1rem" }}>
            AI tools like ChatGPT, Claude, and various AI platforms are powerful, but they don't understand your
            business. They can't automatically integrate with your existing systems, follow your specific workflows, or
            handle your unique data requirements. Someone needs to build the bridge between generic AI capabilities and
            your actual business processes.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            <strong>Large enterprises</strong> hire expensive consulting firms or build internal AI teams.{" "}
            <strong>Small-medium businesses</strong> are stuck with one-size-fits-all solutions that don't quite fit.
          </p>

          <p>
            <strong>Our Solution:</strong> We specialize in understanding your specific business workflows and building
            custom AI solutions that actually integrate with how you work. We take the best AI tools and technologies,
            then build the custom logic, data pipelines, and integrations that make them solve YOUR problems, not
            generic ones.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Our Expertise:</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            We are AI practitioners with deep experience in machine learning, natural language processing, and computer
            vision. Our team has built successful AI applications across multiple industries and developed proprietary
            solutions for critical AI reliability challenges including hallucination reduction, factuality verification,
            and intent recognition. We understand both the technical challenges and business requirements of
            implementing AI solutions that work reliably in production.
          </p>

          <div className="value-props">
            <div className="value-prop">
              <h4>Business Process Analysis</h4>
              <p>We study how your company actually works, not how we think it should work</p>
            </div>
            <div className="value-prop">
              <h4>Custom Integration Development</h4>
              <p>Connect AI capabilities to your existing systems and workflows</p>
            </div>
            <div className="value-prop">
              <h4>Methodology Design</h4>
              <p>Build the specific logic and decision trees your business needs</p>
            </div>
            <div className="value-prop">
              <h4>Data Pipeline Engineering</h4>
              <p>Handle your unique data formats, sources, and requirements</p>
            </div>
            <div className="value-prop">
              <h4>Workflow Automation</h4>
              <p>Make AI work seamlessly within your current operations</p>
            </div>
          </div>
        </section>

        <section className="section-light">
          <h3>Proprietary Technology & Research</h3>
          <div className="value-props">
            <div className="value-prop">
              <h4>Hallucination Reduction</h4>
              <p>Proprietary techniques that significantly reduce AI errors and false outputs</p>
            </div>
            <div className="value-prop">
              <h4>Intent Recognition Models</h4>
              <p>Custom fine-tuned models for accurate understanding of user intent in business contexts</p>
            </div>
            <div className="value-prop">
              <h4>Optimized Model Architecture</h4>
              <p>Smaller, faster models that maintain accuracy while reducing computational costs</p>
            </div>
            <div className="value-prop">
              <h4>Factuality Verification</h4>
              <p>Advanced systems that ensure AI outputs are factually accurate and business-appropriate</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Our Approach:</h3>
          <div className="value-props">
            <div className="value-prop">
              <h4>Business-First</h4>
              <p>We start with your business objectives, not the technology</p>
            </div>
            <div className="value-prop">
              <h4>Rapid Prototyping</h4>
              <p>Quick proof-of-concept development to validate approach</p>
            </div>
            <div className="value-prop">
              <h4>Iterative Development</h4>
              <p>Continuous improvement based on real-world performance</p>
            </div>
            <div className="value-prop">
              <h4>Full-Service</h4>
              <p>From initial consultation through deployment and ongoing support</p>
            </div>
          </div>
        </section>

        <section className="section-light">
          <h3>Development Philosophy</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            We believe AI should augment human capabilities, not replace them. Our solutions are designed to make your
            team more effective, your processes more efficient, and your business more competitive.
          </p>

          <h4 style={{ marginBottom: "1rem" }}>Platform Roadmap</h4>
          <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
            <li>
              <strong>Current:</strong> Custom AI solution development using Nexus Platform foundation
            </li>
            <li>
              <strong>Q3 2025:</strong> Enhanced self-service capabilities for common business use cases
            </li>
            <li>
              <strong>Q4 2025:</strong> Full platform launch with expanded automation features
            </li>
            <li>
              <strong>2026:</strong> Industry-specific modules and advanced analytics capabilities
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
