"use client"

import Link from "next/link"
import ContactForm from "./contact-form"

interface ContactPageProps {
  isActive: boolean
  onPageChange: (pageId: string) => void
}

export default function ContactPage({ isActive, onPageChange }: ContactPageProps) {
  return (
    <div id="contact" className={`page ${isActive ? "active" : ""}`}>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Start Your AI Journey Today</h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Free AI Consultation</h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Discover Your AI Opportunities</strong> (30-45 minutes)
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "2rem", lineHeight: "1.8" }}>
              <li>Business process analysis and AI opportunity identification</li>
              <li>Technical feasibility assessment and integration planning</li>
              <li>Project scope and timeline estimation</li>
              <li>Custom proposal development</li>
            </ul>

            <ContactForm />
          </div>

          <div>
            <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Enterprise Partnerships</h3>
            <p style={{ marginBottom: "2rem" }}>
              <strong>Large-Scale AI Initiatives</strong>
              <br />
              For complex, multi-department implementations or organizations with specific compliance requirements, we
              offer dedicated project management and custom enterprise agreements.
            </p>

            <div style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "15px", marginBottom: "2rem" }}>
              <h4 style={{ color: "#667eea", marginBottom: "1rem" }}>What Happens Next:</h4>
              <ol style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
                <li>
                  <strong>Initial Consultation:</strong> Understand your business challenges and objectives
                </li>
                <li>
                  <strong>Technical Assessment:</strong> Evaluate data readiness and integration requirements
                </li>
                <li>
                  <strong>Proposal Development:</strong> Custom solution design with timeline and investment details
                </li>
                <li>
                  <strong>Project Kickoff:</strong> Begin development with clear milestones and regular updates
                </li>
              </ol>
            </div>

            <div className="section-dark">
              <h4 style={{ marginBottom: "1rem" }}>Get In Touch</h4>
              <p>
                <strong>Email:</strong> solutions@yonata.ai
              </p>
              <p>
                <strong>Phone:</strong> Available upon request
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Response Time:</strong> Within 24 hours for all inquiries
              </p>
            </div>
          </div>
        </div>

        <section className="section-light" style={{ textAlign: "center" }}>
          <h3>Ready to Explore AI for Your Business?</h3>
          <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
            Book your free consultation to discuss how AI can transform your operations, reduce costs, and accelerate
            growth. No obligation, no sales pressure - just honest advice about whether AI is right for your business.
          </p>
          <Link
            href="#"
            className="cta-button"
            onClick={() => {
              const nameInput = document.getElementById("name")
              if (nameInput) {
                nameInput.focus()
              }
            }}
          >
            Start Your Free Consultation
          </Link>
        </section>
      </div>
    </div>
  )
}
