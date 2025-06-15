"use client"

import Link from "next/link"

interface HomePageProps {
  isActive: boolean
  onPageChange: (pageId: string) => void
}

export default function HomePage({ isActive, onPageChange }: HomePageProps) {
  return (
    <div id="home" className={`page ${isActive ? "active" : ""}`}>
      <div className="container">
        <section className="hero">
          <h1>Deploy Profitable AI in 12 Weeks</h1>
          <p>We design, ship, and support custom AI that pays for itself—fast—for growing businesses.</p>

          <Link
            href="#"
            className="cta-button"
            onClick={() => onPageChange("contact")}
            style={{ display: "inline-block", marginTop: "2rem" }}
          >
            Schedule Free Consultation
          </Link>
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
          <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}>Business Problems We Solve</h2>

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

        <section className="section-light">
          <h3>Why We Focus on Integration, Not Just Tools:</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <p>
              <strong>The Hard Truth About AI Tools:</strong>
            </p>
            <ul style={{ marginLeft: "2rem", marginTop: "0.5rem", lineHeight: "1.8" }}>
              <li>
                <strong>Dashboards are commoditized</strong> - Open source tools already match expensive platforms
              </li>
              <li>
                <strong>Business integration isn't</strong> - Understanding your workflows and data requires expertise
              </li>
              <li>
                <strong>Own your future</strong> - We use open standards so you're never locked into proprietary systems
              </li>
            </ul>
            <p style={{ fontStyle: "italic", marginTop: "1.5rem", color: "#6a6a6a" }}>
              Built on OpenTelemetry, Langfuse, and other open standards - your data stays portable.
            </p>
          </div>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Generic AI Tools</th>
                  <th>What You Actually Need</th>
                  <th>Yonata's Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ChatGPT, Claude, etc.</td>
                  <td>Integration with your CRM, ERP, databases</td>
                  <td>Custom workflows that connect AI to your systems</td>
                </tr>
                <tr>
                  <td>One-size-fits-all features</td>
                  <td>Workflows that match YOUR processes</td>
                  <td>Business process analysis and custom logic</td>
                </tr>
                <tr>
                  <td>Generic responses</td>
                  <td>Answers based on YOUR data and rules</td>
                  <td>Custom training and fine-tuning</td>
                </tr>
                <tr>
                  <td>Manual copy-paste work</td>
                  <td>Automated integration with existing tools</td>
                  <td>Seamless API connections and data pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: "center", fontWeight: "600", marginTop: "1.5rem", color: "#1a1a1a" }}>
            You need someone who understands both AI capabilities AND your business workflows. That's exactly what we
            do.
          </p>
        </section>

        <section className="section-dark" style={{ textAlign: "center" }}>
          <h3>Why Growing Businesses Choose Yonata</h3>
          <p style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
            We bridge the gap between powerful AI tools and your actual business processes. While others sell you
            generic AI software, we build the custom integrations, workflows, and methodologies that make AI solve your
            specific problems. Our proprietary models for hallucination reduction, intent recognition, and factuality
            verification ensure your AI systems work reliably in production. You get enterprise-level AI integration
            expertise and proven reliability technology without the enterprise price tag or timeline.
          </p>
        </section>
      </div>
    </div>
  )
}
