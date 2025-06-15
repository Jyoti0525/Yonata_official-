import type { Metadata } from "next"
import Accordion from "@/components/accordion"

export const metadata: Metadata = {
  title: "AI Solutions - Yonata.ai",
  description: "AI Solutions Built for Real Business Impact",
}

export default function SolutionsPage() {
  return (
    <main>
      <div className="solutions-page-wrapper">
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
              <div className="hero-badge">Solutions</div>
              <h1 className="modern-title">
                <span className="title-line">AI Solutions Built for</span>
                <span className="title-line">Real Business Impact</span>
              </h1>
              <div className="hero-description">
                <p>Custom AI implementations that deliver measurable results across industries</p>
              </div>
            </div>
          </section>

          <div className="solutions-grid">
            <div className="solution-card">
              <h3>Reduce Defects by 40%</h3>
              <h4>Manufacturing & Quality Control</h4>
              <ul>
                <li>Automated defect detection using computer vision</li>
                <li>Predictive maintenance to prevent costly breakdowns</li>
                <li>Production optimization and supply chain intelligence</li>
                <li>Real-time monitoring and anomaly detection</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Computer vision models with custom training, IoT sensor integration, and predictive analytics using machine learning pipelines"
              />
            </div>

            <div className="solution-card">
              <h3>Accelerate Diagnosis by 50%</h3>
              <h4>Healthcare & Medical AI</h4>
              <ul>
                <li>AI-powered diagnostic assistance and decision support</li>
                <li>Medical literature analysis and research automation</li>
                <li>Patient data processing and clinical insights</li>
                <li>Workflow optimization and administrative automation</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Natural language processing for medical literature, custom models trained on clinical data, and integration with electronic health records"
              />
            </div>

            <div className="solution-card">
              <h3>Cut Research Time by 60%</h3>
              <h4>Legal & Professional Services</h4>
              <ul>
                <li>Automated contract review and legal document analysis</li>
                <li>AI-powered legal research and case law search</li>
                <li>Compliance monitoring and risk assessment</li>
                <li>Document processing and categorization</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Advanced RAG systems trained on legal databases, multi-agent document analysis, and custom fine-tuning for legal terminology"
              />
            </div>

            <div className="solution-card">
              <h3>Prevent Revenue Loss</h3>
              <h4>Financial Services & Risk</h4>
              <ul>
                <li>Real-time fraud detection and prevention</li>
                <li>Credit risk assessment and automated scoring</li>
                <li>Compliance monitoring and regulatory reporting</li>
                <li>Financial data analysis and trend prediction</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Machine learning models for anomaly detection, predictive analytics for risk scoring, and automated compliance workflows"
              />
            </div>

            <div className="solution-card">
              <h3>Scale Without Hiring</h3>
              <h4>Business Process Automation</h4>
              <ul>
                <li>Intelligent customer service and support automation</li>
                <li>Advanced data analysis and business intelligence</li>
                <li>Lead scoring and sales pipeline optimization</li>
                <li>Automated reporting and executive dashboards</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Multi-agent systems for workflow automation, natural language processing for customer interactions, and predictive analytics for business insights"
              />
            </div>

            <div className="solution-card">
              <h3>Eliminate AI Errors & Hallucinations</h3>
              <h4>Reliable AI with Proprietary Safeguards</h4>
              <ul>
                <li>Custom hallucination detection and prevention systems</li>
                <li>Factuality verification using our proprietary models</li>
                <li>Intent recognition fine-tuned for your specific business context</li>
                <li>Faster, smaller models optimized for production reliability</li>
                <li>Real-time quality monitoring and automatic error correction</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Proprietary fine-tuning techniques, hallucination reduction algorithms, and intent recognition models developed specifically for business-critical applications"
              />
            </div>

            <div className="solution-card">
              <h3>Comprehensive AI Testing</h3>
              <h4>Quality Assurance for AI Systems</h4>
              <ul>
                <li>Custom test design aligned to your specific business goals</li>
                <li>Automated quality gates that prevent bad AI outputs from reaching customers</li>
                <li>Performance monitoring and continuous improvement frameworks</li>
                <li>Integration with your existing development and deployment processes</li>
              </ul>
              <Accordion
                title="How It Works"
                content="Custom evaluation frameworks using open standards like OpenTelemetry, automated testing pipelines, and business-specific quality metrics"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
