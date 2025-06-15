import type { Metadata } from "next"
import Accordion from "@/components/accordion"
import { Cloud, GitBranch, Server, Lock, Users, FileText, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Platform - Yonata.ai",
  description: "The Nexus AI Platform - Enterprise Technology, Accessible Implementation",
}

export default function PlatformPage() {
  return (
    <main>
      <div className="platform-page-wrapper">
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
              <div className="hero-badge">The Platform</div>
              <h1 className="modern-title">
                <span className="title-line">The Nexus</span>
                <span className="title-line">AI Platform</span>
              </h1>
              <div className="hero-description">
                <p>Enterprise Technology, Accessible Implementation</p>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Enterprise Security</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Custom Integration</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Scalable Deployment</span>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="platform-security-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge security">Security First</div>
                <h3>Security & Compliance Framework</h3>
              </div>
              <div className="platform-security-content">
                <p>
                  Enterprise-grade security architecture with end-to-end encryption, secure data handling, and strict
                  data governance policies. Our platform is designed with security-first principles and can support your
                  compliance requirements for various industry standards.
                </p>
                <div className="security-grid">
                  <div className="security-feature">
                    <div className="security-icon">
                      <Lock className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="security-text">
                      <h4>Data Encryption</h4>
                      <p>End-to-end encryption for data in transit and at rest</p>
                    </div>
                  </div>
                  <div className="security-feature">
                    <div className="security-icon">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="security-text">
                      <h4>Access Control</h4>
                      <p>Role-based permissions and authentication systems</p>
                    </div>
                  </div>
                  <div className="security-feature">
                    <div className="security-icon">
                      <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="security-text">
                      <h4>Audit Logging</h4>
                      <p>Comprehensive logging for compliance and monitoring</p>
                    </div>
                  </div>
                  <div className="security-feature">
                    <div className="security-icon">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="security-text">
                      <h4>Data Governance</h4>
                      <p>Strict policies ensuring your data remains yours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="platform-capabilities-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge capabilities">Core Technology</div>
                <h3>Core Platform Capabilities</h3>
              </div>
              <div className="platform-capabilities-content">
                <p>
                  Advanced document processing extracts and analyzes data from any business format, while predictive
                  analytics forecast outcomes using your historical data. Computer vision enables automated image
                  analysis and quality control, paired with natural language processing that understands and processes
                  human language at scale.
                </p>
                <p>
                  <strong>Proprietary AI Models & IP:</strong> Our team has developed specialized solutions to address
                  critical AI reliability challenges. We've built custom fine-tuned models that are smaller, faster, and
                  more accurate for specific business tasks, with proprietary techniques for hallucination reduction,
                  factuality verification, and intent recognition.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="platform-features-section">
            <div className="platform-features-grid">
              <div className="platform-feature-card">
                <div className="platform-feature-number">01</div>
                <div className="platform-feature-content">
                  <h4>Documents</h4>
                  <p>Advanced document processing and analysis</p>
                </div>
              </div>
              <div className="platform-feature-card">
                <div className="platform-feature-number">02</div>
                <div className="platform-feature-content">
                  <h4>Predictive</h4>
                  <p>Forecast outcomes using historical data</p>
                </div>
              </div>
              <div className="platform-feature-card">
                <div className="platform-feature-number">03</div>
                <div className="platform-feature-content">
                  <h4>Computer Vision</h4>
                  <p>Automated image analysis and quality control</p>
                </div>
              </div>
              <div className="platform-feature-card">
                <div className="platform-feature-number">04</div>
                <div className="platform-feature-content">
                  <h4>NLP</h4>
                  <p>Natural language processing at scale</p>
                </div>
              </div>
              <div className="platform-feature-card">
                <div className="platform-feature-number">05</div>
                <div className="platform-feature-content">
                  <h4>Automation</h4>
                  <p>Intelligent process workflow optimization</p>
                </div>
              </div>
              <div className="platform-feature-card">
                <div className="platform-feature-number">06</div>
                <div className="platform-feature-content">
                  <h4>Custom Models</h4>
                  <p>Proprietary AI models and IP solutions</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Integrations Section - Floating Colorful Icons */}
        <section className="platform-integrations-floating-section">
          <div className="container">
            <div className="integrations-header-standalone">
              
              <h3>Enterprise Integrations</h3>
            </div>
          </div>

          <div className="floating-icons-container">
            <div className="floating-icons-track">
              <div className="floating-icon azure-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0078d4">
                  <path
                    d="M12.5 2.5L2 9.5l10.5 6L23 9.5L12.5 2.5zM2 15.5l10.5 6L23 15.5M2 12l10.5 6L23 12"
                    stroke="#0078d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="floating-icon aws-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#ff9900">
                  <path d="M18.75 11.35a6.25 6.25 0 1 0-11.5 0c-.75.38-1.25 1.16-1.25 2.05 0 1.29 1.05 2.35 2.35 2.35h8.3c1.29 0 2.35-1.06 2.35-2.35 0-.89-.5-1.67-1.25-2.05z" />
                  <path d="M12 2v10M8 6l4-4 4 4" stroke="#ff9900" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <div className="floating-icon gcp-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#4285f4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>

              <div className="floating-icon salesforce-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#00a1e0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="floating-icon sap-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0f7db8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                </svg>
              </div>

              <div className="floating-icon quickbooks-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0077c5">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>

              <div className="floating-icon databricks-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#ff3621">
                  <path d="M12 2l-5.5 9h11L12 2zm0 20l5.5-9h-11L12 22z" />
                </svg>
              </div>

              <div className="floating-icon digitalocean-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0080ff">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" fill="white" />
                  <circle cx="12" cy="12" r="2" fill="#0080ff" />
                </svg>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="floating-icon azure-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0078d4">
                  <path
                    d="M12.5 2.5L2 9.5l10.5 6L23 9.5L12.5 2.5zM2 15.5l10.5 6L23 15.5M2 12l10.5 6L23 12"
                    stroke="#0078d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="floating-icon aws-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#ff9900">
                  <path d="M18.75 11.35a6.25 6.25 0 1 0-11.5 0c-.75.38-1.25 1.16-1.25 2.05 0 1.29 1.05 2.35 2.35 2.35h8.3c1.29 0 2.35-1.06 2.35-2.35 0-.89-.5-1.67-1.25-2.05z" />
                  <path d="M12 2v10M8 6l4-4 4 4" stroke="#ff9900" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <div className="floating-icon gcp-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#4285f4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>

              <div className="floating-icon salesforce-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#00a1e0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="floating-icon sap-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0f7db8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                </svg>
              </div>

              <div className="floating-icon quickbooks-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0077c5">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>

              <div className="floating-icon databricks-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#ff3621">
                  <path d="M12 2l-5.5 9h11L12 2zm0 20l5.5-9h-11L12 22z" />
                </svg>
              </div>

              <div className="floating-icon digitalocean-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#0080ff">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" fill="white" />
                  <circle cx="12" cy="12" r="2" fill="#0080ff" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Technical Details */}
          <section className="platform-technical-section">
            <div className="about-glass-card">
              <div className="about-section-header">
                <div className="about-section-badge technical">Technical Details</div>
                <h3>Advanced Platform Architecture</h3>
              </div>
              <div className="platform-technical-content">
                <Accordion
                  title="For Technical Teams - Advanced Platform Details"
                  className="platform-technical-accordion"
                  content={
                    <div className="platform-technical-details">
                      <ul style={{ marginLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>
                          Advanced RAG (Retrieval-Augmented Generation) pipeline architecture for intelligent knowledge
                          systems
                        </li>
                        <li>Multi-Agent AI systems for complex workflow orchestration and decision-making</li>
                        <li>
                          Custom model fine-tuning using supervised learning and reinforcement learning from human
                          feedback (RLHF)
                        </li>
                        <li>
                          <strong>Proprietary hallucination reduction techniques</strong> and factuality verification
                          systems for reliable AI outputs
                        </li>
                        <li>
                          <strong>Intent recognition models</strong> fine-tuned for specific business domains and use
                          cases
                        </li>
                        <li>
                          <strong>Optimized smaller models</strong> that deliver faster inference while maintaining
                          accuracy for production environments
                        </li>
                        <li>Support for BERT, GPT, and other state-of-the-art transformer architectures</li>
                        <li>Synthetic data generation capabilities for training and testing scenarios</li>
                        <li>
                          Real-time model evaluation, A/B testing, and performance monitoring using open standards
                        </li>
                        <li>OpenTelemetry-compatible observability and monitoring for future-proof data portability</li>
                        <li>Scalable cloud-native deployment with Kubernetes orchestration on any infrastructure</li>
                        <li>Vector databases, embedding models, and semantic search capabilities</li>
                        <li>MLOps pipelines for continuous integration and deployment of AI models</li>
                        <li>Custom evaluation frameworks and automated quality gates for reliable AI outputs</li>
                      </ul>
                    </div>
                  }
                />
              </div>
            </div>
          </section>

          {/* Deployment Options */}
          <section className="platform-deployment-section">
            <div className="about-section-header-standalone">
              <div className="about-section-badge deployment">Deployment</div>
              <h3>Deployment Options</h3>
            </div>
            <div className="deployment-grid">
              <div className="deployment-card">
                <div className="deployment-icon">
                  <Cloud className="w-12 h-12 text-blue-400" />
                </div>
                <div className="deployment-content">
                  <h4>Cloud-Native</h4>
                  <p>Fully managed, scalable cloud deployment</p>
                </div>
                <div className="deployment-features">
                  <span className="deployment-feature">Auto-scaling</span>
                  <span className="deployment-feature">Global CDN</span>
                  <span className="deployment-feature">99.9% Uptime</span>
                </div>
              </div>
              <div className="deployment-card">
                <div className="deployment-icon">
                  <GitBranch className="w-12 h-12 text-purple-400" />
                </div>
                <div className="deployment-content">
                  <h4>Hybrid</h4>
                  <p>Critical data on-premise with cloud processing</p>
                </div>
                <div className="deployment-features">
                  <span className="deployment-feature">Data Control</span>
                  <span className="deployment-feature">Cloud Power</span>
                  <span className="deployment-feature">Compliance</span>
                </div>
              </div>
              <div className="deployment-card">
                <div className="deployment-icon">
                  <Server className="w-12 h-12 text-green-400" />
                </div>
                <div className="deployment-content">
                  <h4>On-Premise</h4>
                  <p>Complete on-site deployment for maximum security</p>
                </div>
                <div className="deployment-features">
                  <span className="deployment-feature">Full Control</span>
                  <span className="deployment-feature">Air-gapped</span>
                  <span className="deployment-feature">Custom Setup</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
