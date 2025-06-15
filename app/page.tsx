import type { Metadata } from "next"
import Link from "next/link"
import IntegrationFocusSection from "@/components/integration-focus-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Yonata.ai - Custom AI Solutions for Growing Businesses",
  description: "We design, ship, and support custom AI that pays for itself—fast—for growing businesses.",
}

export default function HomePage() {
  return (
    <main>
      <div className="home-page-wrapper">
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
              
              <h1 className="modern-title">
                <span className="title-line">Deploy Profitable AI in 12 Weeks</span>
                {/* <span className="title-line">in 12 Weeks</span> */}
              </h1>
              <div className="hero-description">
                <p>We design, ship, and support custom AI that pays for itself—fast—for growing businesses.</p>
              </div>
              <div className="hero-cta">
                <Link
                  href="/contact"
                  className="cta-button-modern"
                  style={{ paddingTop: "0.4rem", paddingBottom: "0.4rem" }} // ← Reduced height
                >
                  <span className="button-text">Schedule Free Consultation</span><ArrowRight size={20} />
                  
                  <div className="button-shine"></div>
                </Link>
              </div>
            </div>
          </section>

          <section className="value-props">
            <div className="value-prop">
              <h3>Cut Costs by 30-50%</h3>
              <p>AI automation that replaces manual processes and reduces operational overhead</p>
            </div>
            <div className="value-prop">
              <h3>Ship in 4-12 Weeks</h3>
              <p>Rigorous testing that ensures reliability and faster time-to-market</p>
            </div>
            <div className="value-prop">
              <h3>Zero AI Expertise Required</h3>
              <p>We handle complexity, testing, and validation so you focus on results</p>
            </div>
            <div className="value-prop">
              <h3>Open & Future-Proof</h3>
              <p>Built on open standards with no vendor lock-in for long-term flexibility</p>
            </div>
            <div className="value-prop">
              <h3>Enterprise-Grade Quality</h3>
              <p>Professional AI solutions with reliability safeguards and proven methodologies</p>
            </div>
            <div className="value-prop">
              <h3>Custom Integration</h3>
              <p>Seamlessly connects AI capabilities with your existing business systems</p>
            </div>
          </section>

          <section>
            <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}>
              Business Problems We Solve
            </h2>

            <div className="value-props">
              <div className="value-prop">
                <h3>Cut Operating Costs</h3>
                <p>Automate manual processes, reduce errors, eliminate repetitive tasks</p>
              </div>
              <div className="value-prop">
                <h3>Boost Revenue</h3>
                <p>AI-powered insights, lead scoring, and customer intelligence</p>
              </div>
              <div className="value-prop">
                <h3>Ensure Compliance</h3>
                <p>Automated monitoring, risk detection, and regulatory reporting</p>
              </div>
              <div className="value-prop">
                <h3>Scale Operations</h3>
                <p>Handle 3x workload without adding headcount</p>
              </div>
            </div>
          </section>

          <IntegrationFocusSection />

          <section className="section-dark" style={{ textAlign: "center" }}>
            <h3>Why Growing Businesses Choose Yonata</h3>
            <p style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
              We bridge the gap between powerful AI tools and your actual business processes. While others sell you
              generic AI software, we build the custom integrations, workflows, and methodologies that make AI solve
              your specific problems. Our proprietary models for hallucination reduction, intent recognition, and
              factuality verification ensure your AI systems work reliably in production. You get enterprise-level AI
              integration expertise and proven reliability technology without the enterprise price tag or timeline.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
