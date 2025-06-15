import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Yonata.ai",
  description: "AI Experts Building the Future of Business Intelligence",
}

export default function AboutPage() {
  return (
    <main>
      <div className="about-page-wrapper">
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
          {/* Hero Section */}
          <section className="hero-section-modern">
            <div className="hero-content-glass">
              <div className="hero-badge">About Yonata.ai</div>
              <h1 className="modern-title">
                <span className="title-line">AI Experts</span>
                <span className="title-line">Building the Future of</span>
                <span className="title-line">Business Intelligence</span>
              </h1>
              <div className="hero-description">
                <p>Transforming businesses through intelligent automation and custom AI solutions</p>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Week Average Delivery</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Solution Section */}
          <section className="about-solution-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge solution">Our Solution</div>
                <h3>What Makes Us Different</h3>
              </div>
              <div className="about-solution-content">
                <p>
                  We specialize in understanding your specific business workflows and building custom AI solutions that
                  actually integrate with how you work. We take the best AI tools and technologies, then build the
                  custom logic, data pipelines, and integrations that make them solve YOUR problems, not generic ones.
                </p>
                <div className="solution-features">
                  <div className="solution-feature-badge">Custom Built</div>
                  <div className="solution-feature-badge">Affordable</div>
                  <div className="solution-feature-badge">Fast Delivery</div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="about-mission-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge mission">Our Mission</div>
                <h3>Bridging the AI Gap</h3>
              </div>
              <div className="about-mission-content">
                <p>
                  To bridge the gap between powerful AI tools and real business solutions for companies that can't
                  afford enterprise consulting but need more than cookie-cutter software.
                </p>
                <div className="mission-features">
                  <div className="mission-feature">
                    <span className="feature-bullet">•</span>
                    <span>Focused Solutions</span>
                  </div>
                  <div className="mission-feature">
                    <span className="feature-bullet">•</span>
                    <span>Rapid Implementation</span>
                  </div>
                  <div className="mission-feature">
                    <span className="feature-bullet">•</span>
                    <span>Custom Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="about-problem-section">
            <div className="about-section-header-standalone">
              <h3>The Problem We Solve</h3>
            </div>
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge reality">The Reality</div>
              </div>
              <div className="about-problem-content">
                <p>
                  AI tools like ChatGPT, Claude, and various AI platforms are powerful, but they don't understand your
                  business. They can't automatically integrate with your existing systems, follow your specific
                  workflows, or handle your unique data requirements.
                </p>
                <div className="problem-comparison">
                  <div className="comparison-card large-enterprise">
                    <div className="comparison-dot red"></div>
                    <h4>Large Enterprises</h4>
                    <p>Hire expensive consulting firms or build internal AI teams</p>
                  </div>
                  <div className="comparison-vs">vs</div>
                  <div className="comparison-card small-business">
                    <div className="comparison-dot orange"></div>
                    <h4>Small-Medium Business</h4>
                    <p>Stuck with one-size-fits-all solutions that don't quite fit</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="about-expertise-section">
            <div className="about-section-header-standalone">
              <div className="about-section-badge expertise">Our Expertise</div>
              <h3>What Makes Us Different</h3>
            </div>
            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="expertise-number">01</div>
                <div className="expertise-content">
                  <h4>Business Process Analysis</h4>
                  <p>We study how your company actually works, not how we think it should work</p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-number">02</div>
                <div className="expertise-content">
                  <h4>Custom Integration Development</h4>
                  <p>Connect AI capabilities to your existing systems and workflows</p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-number">03</div>
                <div className="expertise-content">
                  <h4>Methodology Design</h4>
                  <p>Build the specific logic and decision trees your business needs</p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-number">04</div>
                <div className="expertise-content">
                  <h4>Data Pipeline Engineering</h4>
                  <p>Handle your unique data formats, sources, and requirements</p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-number">05</div>
                <div className="expertise-content">
                  <h4>Workflow Automation</h4>
                  <p>Make AI work seamlessly within your current operations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="about-technology-section">
            <div className="about-section-header-standalone">
              <div className="about-section-badge innovation">Innovation</div>
              <h3>Proprietary Technology & Research</h3>
            </div>
            <div className="technology-grid">
              <div className="technology-card">
                <div className="tech-dot"></div>
                <h4>Hallucination Reduction</h4>
                <p>Proprietary techniques that significantly reduce AI errors and false outputs</p>
              </div>
              <div className="technology-card">
                <div className="tech-dot"></div>
                <h4>Intent Recognition Models</h4>
                <p>Custom fine-tuned models for accurate understanding of user intent in business contexts</p>
              </div>
              <div className="technology-card">
                <div className="tech-dot"></div>
                <h4>Optimized Model Architecture</h4>
                <p>Smaller, faster models that maintain accuracy while reducing computational costs</p>
              </div>
              <div className="technology-card">
                <div className="tech-dot"></div>
                <h4>Factuality Verification</h4>
                <p>Advanced systems that ensure AI outputs are factually accurate and business-appropriate</p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="about-philosophy-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge philosophy">Philosophy</div>
                <h3>Our Development Philosophy</h3>
              </div>
              <div className="philosophy-content">
                <div className="philosophy-quote">
                  <div className="quote-marks">"</div>
                  <p>
                    We believe AI should augment human capabilities, not replace them. Our solutions are designed to
                    make your team more effective, your processes more efficient, and your business more competitive.
                  </p>
                  <div className="quote-marks">"</div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="about-roadmap-section">
            <div className="about-section-header-standalone">
              <h3>Platform Roadmap</h3>
            </div>
            <div className="roadmap-grid">
              <div className="roadmap-card current">
                <div className="roadmap-badge current">Current</div>
                <h4>Custom AI Solutions</h4>
                <p>Development using Nexus Platform foundation</p>
              </div>
              <div className="roadmap-card future">
                <div className="roadmap-badge">Q3 2025</div>
                <h4>Self-Service Platform</h4>
                <p>Enhanced capabilities for common business use cases</p>
              </div>
              <div className="roadmap-card future">
                <div className="roadmap-badge">Q4 2025</div>
                <h4>Full Platform Launch</h4>
                <p>Expanded automation features and integrations</p>
              </div>
              <div className="roadmap-card future">
                <div className="roadmap-badge">2026</div>
                <h4>Industry Modules</h4>
                <p>Specialized solutions and advanced analytics</p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="about-process-section">
            <div className="about-section-header-standalone">
              <div className="about-section-badge process">Our Process</div>
              <h3>How We Work</h3>
            </div>
            <div className="process-timeline">
              <div className="process-step">
                <div className="process-number">1</div>
                <div className="process-content">
                  <h4>Business-First Approach</h4>
                  <p>We start with your business objectives, not the technology</p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-number">2</div>
                <div className="process-content">
                  <h4>Rapid Prototyping</h4>
                  <p>Quick proof-of-concept development to validate approach</p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-number">3</div>
                <div className="process-content">
                  <h4>Iterative Development</h4>
                  <p>Continuous improvement based on real-world performance</p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-number">4</div>
                <div className="process-content">
                  <h4>Full-Service Support</h4>
                  <p>From initial consultation through deployment and ongoing support</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
