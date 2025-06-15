import Accordion from "./accordion"

interface PlatformPageProps {
  isActive: boolean
}

export default function PlatformPage({ isActive }: PlatformPageProps) {
  return (
    <div id="platform" className={`page ${isActive ? "active" : ""}`}>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>The Nexus AI Platform</h1>
        <p style={{ textAlign: "center", fontSize: "1.3rem", color: "#6a6a6a", marginBottom: "3rem" }}>
          Enterprise Technology, Accessible Implementation
        </p>

        <section className="section-light">
          <h3>Security & Compliance Framework</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Enterprise-grade security architecture with end-to-end encryption, secure data handling, and strict data
            governance policies. Our platform is designed with security-first principles and can support your compliance
            requirements for various industry standards.
          </p>

          <div className="value-props">
            <div className="value-prop">
              <h4>Data Encryption</h4>
              <p>End-to-end encryption for data in transit and at rest</p>
            </div>
            <div className="value-prop">
              <h4>Access Control</h4>
              <p>Role-based permissions and authentication systems</p>
            </div>
            <div className="value-prop">
              <h4>Audit Logging</h4>
              <p>Comprehensive logging for compliance and monitoring</p>
            </div>
            <div className="value-prop">
              <h4>Data Governance</h4>
              <p>Strict policies ensuring your data remains yours</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Core Platform Capabilities:</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Advanced document processing extracts and analyzes data from any business format, while predictive analytics
            forecast outcomes using your historical data. Computer vision enables automated image analysis and quality
            control, paired with natural language processing that understands and processes human language at scale. All
            wrapped in intelligent process automation for workflow optimization.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Proprietary AI Models & IP:</strong> Our team has developed specialized solutions to address
            critical AI reliability challenges. We've built custom fine-tuned models that are smaller, faster, and more
            accurate for specific business tasks, with proprietary techniques for hallucination reduction, factuality
            verification, and intent recognition that ensure your AI systems work reliably in production environments.
          </p>

          <div className="platform-features">
            <div className="feature-icon">
              <strong>Documents</strong>
            </div>
            <div className="feature-icon">
              <strong>Predictive</strong>
            </div>
            <div className="feature-icon">
              <strong>Computer Vision</strong>
            </div>
            <div className="feature-icon">
              <strong>NLP</strong>
            </div>
            <div className="feature-icon">
              <strong>Automation</strong>
            </div>
            <div className="feature-icon">
              <strong>Custom Models</strong>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3>Enterprise Integrations</h3>
          <div className="trust-badges">
            <div className="badge">Azure</div>
            <div className="badge">AWS</div>
            <div className="badge">Google Cloud</div>
            <div className="badge">Salesforce</div>
            <div className="badge">SAP</div>
            <div className="badge">QuickBooks</div>
          </div>
        </section>

        <section style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "15px" }}>
          <Accordion
            title="For Technical Teams - Advanced Platform Details"
            className=""
            content={
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>
                  Advanced RAG (Retrieval-Augmented Generation) pipeline architecture for intelligent knowledge systems
                </li>
                <li>Multi-Agent AI systems for complex workflow orchestration and decision-making</li>
                <li>
                  Custom model fine-tuning using supervised learning and reinforcement learning from human feedback
                  (RLHF)
                </li>
                <li>
                  <strong>Proprietary hallucination reduction techniques</strong> and factuality verification systems
                  for reliable AI outputs
                </li>
                <li>
                  <strong>Intent recognition models</strong> fine-tuned for specific business domains and use cases
                </li>
                <li>
                  <strong>Optimized smaller models</strong> that deliver faster inference while maintaining accuracy for
                  production environments
                </li>
                <li>Support for BERT, GPT, and other state-of-the-art transformer architectures</li>
                <li>Synthetic data generation capabilities for training and testing scenarios</li>
                <li>Real-time model evaluation, A/B testing, and performance monitoring using open standards</li>
                <li>OpenTelemetry-compatible observability and monitoring for future-proof data portability</li>
                <li>Scalable cloud-native deployment with Kubernetes orchestration on any infrastructure</li>
                <li>Vector databases, embedding models, and semantic search capabilities</li>
                <li>MLOps pipelines for continuous integration and deployment of AI models</li>
                <li>Custom evaluation frameworks and automated quality gates for reliable AI outputs</li>
              </ul>
            }
          />
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Deployment Options:</h3>
          <div className="value-props">
            <div className="value-prop">
              <h4>Cloud-Native</h4>
              <p>Fully managed, scalable cloud deployment</p>
            </div>
            <div className="value-prop">
              <h4>Hybrid</h4>
              <p>Critical data on-premise with cloud processing</p>
            </div>
            <div className="value-prop">
              <h4>On-Premise</h4>
              <p>Complete on-site deployment for maximum security</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
