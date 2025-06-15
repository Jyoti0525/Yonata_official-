"use client"

import { X, Zap, Shield, ArrowRight, MessageSquare, Settings, Brain, Copy } from "lucide-react"

export default function IntegrationFocusSection() {
  return (
    <section className="integration-focus-section">
      <div className="integration-focus-header">
        <h3>Why We Focus on Integration, Not Just Tools:</h3>

        <div className="truth-cards-container">
          <div className="truth-intro">
            <h4>The Hard Truth About AI Tools:</h4>
          </div>

          <div className="truth-cards">
            <div className="truth-card">
              <div className="truth-icon">
                <X className="icon-x" size={24} />
              </div>
              <div className="truth-content">
                <h5>Dashboards are commoditized</h5>
                <p>Open source tools already match expensive platforms</p>
              </div>
            </div>

            <div className="truth-card">
              <div className="truth-icon">
                <Zap className="icon-zap" size={24} />
              </div>
              <div className="truth-content">
                <h5>Business integration isn't</h5>
                <p>Understanding your workflows and data requires expertise</p>
              </div>
            </div>

            <div className="truth-card">
              <div className="truth-icon">
                <Shield className="icon-shield" size={24} />
              </div>
              <div className="truth-content">
                <h5>Own your future</h5>
                <p>We use open standards so you're never locked into proprietary systems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="standards-quote-section">
          <blockquote className="standards-quote">
            "Built on OpenTelemetry, Langfuse, and other open standards — your data stays portable."
          </blockquote>
        </div>

      <div className="comparison-section">
        <div className="comparison-header">
          <h4>The Reality Gap</h4>
          <p>What generic tools offer vs. what your business actually needs</p>
        </div>

        <div className="enhanced-reality-table">
          <div className="table-container">
            <div className="table-header">
              <div className="header-cell generic-header">
                <span className="header-text">Generic AI Tools</span>
              </div>
              <div className="header-divider"></div>
              <div className="header-cell need-header">
                <span className="header-text">What You Actually Need</span>
              </div>
              <div className="header-divider"></div>
              <div className="header-cell solution-header">
                <span className="header-text">Yonata's Solution</span>
              </div>
            </div>

            <div className="table-body">
              <div className="table-row">
                <div className="row-icon">
                  <MessageSquare size={18} />
                </div>
                <div className="table-cell generic-cell">
                  <span>ChatGPT, Claude, etc.</span>
                </div>
                <div className="cell-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell need-cell">
                  <span>Integration with your CRM, ERP, databases</span>
                </div>
                <div className="cell-arrow solution-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell solution-cell">
                  <span>Custom workflows that connect AI to your systems</span>
                </div>
              </div>

              <div className="table-row">
                <div className="row-icon">
                  <Settings size={18} />
                </div>
                <div className="table-cell generic-cell">
                  <span>One-size-fits-all features</span>
                </div>
                <div className="cell-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell need-cell">
                  <span>Workflows that match YOUR processes</span>
                </div>
                <div className="cell-arrow solution-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell solution-cell">
                  <span>Business process analysis and custom logic</span>
                </div>
              </div>

              <div className="table-row">
                <div className="row-icon">
                  <Brain size={18} />
                </div>
                <div className="table-cell generic-cell">
                  <span>Generic responses</span>
                </div>
                <div className="cell-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell need-cell">
                  <span>Answers based on YOUR data and rules</span>
                </div>
                <div className="cell-arrow solution-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell solution-cell">
                  <span>Custom training and fine-tuning</span>
                </div>
              </div>

              <div className="table-row">
                <div className="row-icon">
                  <Copy size={18} />
                </div>
                <div className="table-cell generic-cell">
                  <span>Manual copy-paste work</span>
                </div>
                <div className="cell-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell need-cell">
                  <span>Automated integration with existing tools</span>
                </div>
                <div className="cell-arrow solution-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="table-cell solution-cell">
                  <span>Seamless API connections and data pipelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elegant-quote-section">
        <blockquote className="conclusion-quote">
          "You need someone who understands both AI capabilities <span className="highlight-and">and</span> your
          business workflows. That's exactly what we do."
        </blockquote>
      </div>
    </section>
  )
}
