import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Services - Yonata.ai",
  description: "Comprehensive AI Solutions for Your Business",
}

export default function ServicesPage() {
  return (
    <main>
      <div className="services-page-wrapper">
        <div className="modern-background">
          <div className="floating-elements">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>
            <div className="floating-shape shape-6"></div>
          </div>
        </div>

        <div className="container">
          <section className="hero-section-modern">
            <div className="hero-content-glass">
              <div className="hero-badge">Services</div>
              <h1 className="modern-title">
                <span className="title-line">Comprehensive AI Solutions</span>
                <span className="title-line">for Your Business</span>
              </h1>
              <div className="hero-description">
                <p>From strategy to implementation, we provide end-to-end AI services</p>
              </div>
            </div>
          </section>

          <div className="services-grid">
            <div className="service-card">
              <h3>AI Reliability & Optimization</h3>
              <p>
                <strong>Deploy Error-Free AI with Proprietary Safeguards</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>Hallucination detection and prevention using our proprietary algorithms</li>
                <li>Custom intent recognition models fine-tuned for your business domain</li>
                <li>Model optimization for faster inference and reduced computational costs</li>
                <li>Factuality verification systems that ensure accurate AI outputs</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Comprehensive AI Testing</h3>
              <p>
                <strong>Quality Assurance Framework for AI Systems</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>Business-specific test design and quality metrics development</li>
                <li>Automated evaluation pipelines and quality gates</li>
                <li>Performance monitoring and reliability frameworks</li>
                <li>Integration with your development and deployment processes</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Business Process Integration</h3>
              <p>
                <strong>Make AI Work With Your Actual Workflows</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>Deep analysis of your current business processes and systems</li>
                <li>Custom integration between AI capabilities and your existing tools</li>
                <li>Workflow automation that follows your specific business rules</li>
                <li>Data pipeline development for your unique requirements</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Custom AI Development</h3>
              <p>
                <strong>Beyond Generic Tools - Built for Your Business</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>Requirements analysis and feasibility assessment</li>
                <li>Custom model development and training on your data</li>
                <li>Integration with existing business systems and databases</li>
                <li>Performance optimization and fine-tuning for your use cases</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>AI Strategy & Implementation Planning</h3>
              <p>
                <strong>From Generic AI Tools to Business Solutions</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>AI readiness assessment and opportunity identification</li>
                <li>Custom methodology design for your specific workflows</li>
                <li>Technology strategy and implementation roadmap</li>
                <li>Integration planning with existing systems and processes</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Ongoing Support & Optimization</h3>
              <p>
                <strong>Ensure Continued Value from Your AI Investment</strong>
              </p>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>Performance monitoring and model maintenance</li>
                <li>Feature updates and capability enhancements</li>
                <li>Technical support and troubleshooting</li>
                <li>Strategic consulting for scaling AI initiatives</li>
              </ul>
            </div>
          </div>

          <section className="section-light" style={{ textAlign: "center" }}>
            <h3>What's Included in Every Project</h3>
            <div className="value-props">
              <div className="value-prop">
                <h4>✅ Initial Consultation</h4>
                <p>Business impact assessment and ROI projections</p>
              </div>
              <div className="value-prop">
                <h4>✅ Custom Development</h4>
                <p>AI solution development tailored to your needs</p>
              </div>
              <div className="value-prop">
                <h4>✅ System Integration</h4>
                <p>Integration with your existing systems and workflows</p>
              </div>
              <div className="value-prop">
                <h4>✅ Security & Compliance</h4>
                <p>Enterprise-grade security architecture and data governance</p>
              </div>
              <div className="value-prop">
                <h4>✅ Ongoing Support</h4>
                <p>90-day optimization and support included</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
