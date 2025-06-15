"use client"

import Link from "next/link"
import { useRef } from "react"
import ContactForm from "@/components/contact-form"

export default function ContactPageClient() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => document.getElementById("name")?.focus(), 700)
    }
  }

  return (
    <main>
      <div className="contact-page-wrapper">
        {/* Background Animation */}
        <div className="modern-background">
          <div className="floating-elements">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`floating-shape shape-${i + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="container">
          {/* Hero Section */}
          <section className="contact-hero-modern">
            <div className="hero-content-glass">
              <h1 className="modern-title">
                <span className="title-line">Start Your AI Journey Today</span>
              </h1>
              <p className="hero-description">
                Transform your business with custom AI solutions designed for your specific needs
              </p>
              <div className="hero-features">
                {["Free Consultation", "Custom Solutions", "Fast Implementation"].map((text, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-dot" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation Section */}
          <section className="consultation-section-centered" ref={formRef}>
            <div className="consultation-card-main">
              <div className="card-glow-effect" />
              <div className="card-header-main">
                <div className="header-badge-main consultation">Free Consultation</div>
                <h2>Discover Your AI Opportunities</h2>
                <p className="header-subtitle">30-45 minute strategic session</p>
              </div>
              <div className="benefit-grid-main">
                {[
                  ["Process Analysis", "Business process analysis and AI opportunity identification"],
                  ["Technical Assessment", "Feasibility assessment and integration planning"],
                  ["Project Scoping", "Timeline estimation and resource planning"],
                  ["Custom Proposal", "Tailored solution design and implementation plan"],
                ].map(([title, desc], i) => (
                  <div key={i} className="benefit-item-main">
                    <div className="benefit-number">{(i + 1).toString().padStart(2, "0")}</div>
                    <div className="benefit-content">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-container-main">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Info Grid Section */}
          <div className="contact-info-grid-new">
            {/* Enterprise Solutions */}
            <div className="info-card-new">
              <div className="dark-card">
                <div className="info-card-header-new">
                  <div className="header-badge-new enterprise">Enterprise Solutions</div>
                  <h3>Large-Scale AI Initiatives</h3>
                  <p>For complex, multi-department implementations</p>
                </div>
                <p>
                  We offer dedicated project management and enterprise agreements tailored to your scale.
                </p>
                <div className="contact-methods-new">
                  {[
                    ["email", "Email", "solutions@yonata.ai"],
                    ["phone", "Phone", "Available upon request"],
                    ["time", "Response Time", "Within 24 hours"],
                  ].map(([type, label, val], i) => (
                    <div key={i} className="contact-method-new">
                      <div className={`method-dot-new ${type}`} />
                      <div className="method-content-new">
                        <strong>{label}</strong>
                        <span>{val}</span>
                      </div>
                    </div>
                  ))}
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
                <div className="process-steps-new">
                  {[
                    ["Discovery", "Understand business challenges and objectives"],
                    ["Assessment", "Evaluate data readiness and integration requirements"],
                    ["Design", "Custom solution design with timeline and investment details"],
                    ["Delivery", "Development with clear milestones and regular updates"],
                  ].map(([title, desc], i) => (
                    <div key={i} className="process-step-new">
                      <div className="step-circle-new">{i + 1}</div>
                      <div className="step-content-new">
                        <h5>{title}</h5>
                        <p>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="cta-section-modern">
            <div className="cta-card-dark-bw">
              <div className="cta-glow-dark-bw" />
              <div className="cta-content-dark-bw">
                <div className="cta-badge-dark-bw">Ready to Transform?</div>
                <h3>Let's Build Something Amazing Together</h3>
                <p>
                  Book your free consultation to explore how AI can reduce costs, improve efficiency, and accelerate growth.
                </p>
                <div className="cta-stats-dark-bw">
                  {[
                    ["24hrs", "Response Time"],
                    ["Free", "Consultation"],
                    ["Custom", "Solutions"],
                  ].map(([value, label], i) => (
                    <div key={i} className="cta-stat-dark-bw">
                      <div className="stat-value-dark-bw">{value}</div>
                      <div className="stat-label-dark-bw">{label}</div>
                    </div>
                  ))}
                </div>
                <button className="cta-button-modern-bw" onClick={scrollToForm}>
                  <span className="button-text">Start Your Free Consultation</span>
                  <div className="button-shine-bw" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
