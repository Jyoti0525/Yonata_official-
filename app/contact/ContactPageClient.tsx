"use client"

import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPageClient() {
  return (
    <main>
      <div className="contact-page-wrapper">
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
          <section className="contact-hero-modern">
            <div className="hero-content-glass">
              <div className="hero-badge">Get Started</div>
              <h1 className="modern-title">
                <span className="title-line">Start Your</span>
                <span className="title-line">AI Journey</span>
                <span className="title-line">Today</span>
              </h1>
              <div className="hero-description">
                <p>Transform your business with custom AI solutions designed for your specific needs</p>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Custom Solutions</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Fast Implementation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Consultation Section - Centered and Expanded */}
          <section className="consultation-section-centered">
            <div className="consultation-card-main">
              <div className="card-glow-effect"></div>

              {/* Card Header */}
              <div className="card-header-main">
                <div className="header-badge-main consultation">Free Consultation</div>
                <h2>Discover Your AI Opportunities</h2>
                <p className="header-subtitle">30-45 minute strategic session</p>
              </div>

              {/* Benefits Grid */}
              <div className="consultation-benefits-main">
                <div className="benefit-grid-main">
                  <div className="benefit-item-main">
                    <div className="benefit-number">01</div>
                    <div className="benefit-content">
                      <h4>Process Analysis</h4>
                      <p>Business process analysis and AI opportunity identification</p>
                    </div>
                  </div>

                  <div className="benefit-item-main">
                    <div className="benefit-number">02</div>
                    <div className="benefit-content">
                      <h4>Technical Assessment</h4>
                      <p>Feasibility assessment and integration planning</p>
                    </div>
                  </div>

                  <div className="benefit-item-main">
                    <div className="benefit-number">03</div>
                    <div className="benefit-content">
                      <h4>Project Scoping</h4>
                      <p>Timeline estimation and resource planning</p>
                    </div>
                  </div>

                  <div className="benefit-item-main">
                    <div className="benefit-number">04</div>
                    <div className="benefit-content">
                      <h4>Custom Proposal</h4>
                      <p>Tailored solution design and implementation plan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Centered */}
              <div className="form-container-main">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Secondary Information Grid - Dark Card Style */}
          <div className="contact-info-grid-new">
            {/* Enterprise Solutions */}
            <div className="info-card-new">
              <div className="dark-card">
                <div className="info-card-header-new">
                  <div className="header-badge-new enterprise">Enterprise Solutions</div>
                  <h3>Large-Scale AI Initiatives</h3>
                  <p>For complex, multi-department implementations</p>
                </div>

                <div className="info-card-content-new">
                  <p>
                    For organizations with specific compliance requirements, we offer dedicated project management and
                    custom enterprise agreements tailored to your scale and complexity.
                  </p>

                  <div className="contact-methods-new">
                    <div className="contact-method-new">
                      <div className="method-dot-new email"></div>
                      <div className="method-content-new">
                        <strong>Email</strong>
                        <span>solutions@yonata.ai</span>
                      </div>
                    </div>

                    <div className="contact-method-new">
                      <div className="method-dot-new phone"></div>
                      <div className="method-content-new">
                        <strong>Phone</strong>
                        <span>Available upon request</span>
                      </div>
                    </div>

                    <div className="contact-method-new">
                      <div className="method-dot-new time"></div>
                      <div className="method-content-new">
                        <strong>Response Time</strong>
                        <span>Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="info-card-new">
              <div className="dark-card">
                <div className="info-card-header-new">
                  <div className="header-badge-new process">Implementation Process</div>
                  <h3>How We Work Together</h3>
                  <p>Clear milestones and regular updates</p>
                </div>

                <div className="info-card-content-new">
                  <div className="process-steps-new">
                    <div className="process-step-new">
                      <div className="step-circle-new">1</div>
                      <div className="step-content-new">
                        <h5>Discovery</h5>
                        <p>Understand business challenges and objectives</p>
                      </div>
                    </div>

                    <div className="process-step-new">
                      <div className="step-circle-new">2</div>
                      <div className="step-content-new">
                        <h5>Assessment</h5>
                        <p>Evaluate data readiness and integration requirements</p>
                      </div>
                    </div>

                    <div className="process-step-new">
                      <div className="step-circle-new">3</div>
                      <div className="step-content-new">
                        <h5>Design</h5>
                        <p>Custom solution design with timeline and investment details</p>
                      </div>
                    </div>

                    <div className="process-step-new">
                      <div className="step-circle-new">4</div>
                      <div className="step-content-new">
                        <h5>Delivery</h5>
                        <p>Development with clear milestones and regular updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Changed from purple to black and white */}
          <section className="cta-section-modern">
            <div className="cta-card-dark-bw">
              <div className="cta-glow-dark-bw"></div>
              <div className="cta-content-dark-bw">
                <div className="cta-badge-dark-bw">Ready to Transform?</div>
                <h3>Let's Build Something Amazing Together</h3>
                <p>
                  Book your free consultation to discuss how AI can transform your operations, reduce costs, and
                  accelerate growth. No obligation, no sales pressure - just honest advice about whether AI is right for
                  your business.
                </p>

                <div className="cta-stats-dark-bw">
                  <div className="cta-stat-dark-bw">
                    <div className="stat-value-dark-bw">24hrs</div>
                    <div className="stat-label-dark-bw">Response Time</div>
                  </div>
                  <div className="cta-stat-dark-bw">
                    <div className="stat-value-dark-bw">Free</div>
                    <div className="stat-label-dark-bw">Consultation</div>
                  </div>
                  <div className="cta-stat-dark-bw">
                    <div className="stat-value-dark-bw">Custom</div>
                    <div className="stat-label-dark-bw">Solutions</div>
                  </div>
                </div>

                <Link
                  href="#"
                  className="cta-button-modern-bw"
                  onClick={() => {
                    const nameInput = document.getElementById("name")
                    if (nameInput) {
                      nameInput.focus()
                    }
                  }}
                >
                  <span className="button-text">Start Your Free Consultation</span>
                  <div className="button-shine-bw"></div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
