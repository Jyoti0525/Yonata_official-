"use client"

import type React from "react"

import { useState, type FormEvent } from "react"

interface FormData {
  name: string
  email: string
  challenge: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    challenge: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message
    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      challenge: "",
    })

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="contact-form">
      <h4
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "var(--foreground)",
          fontSize: "var(--font-size-lg)",
          fontWeight: "600",
        }}
      >
        Get answers in &lt; 24 hours. Only 3 fields required.
      </h4>

      {submitSuccess && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#f0f9f0",
            border: "1px solid #c3e6cb",
            borderRadius: "4px",
            marginBottom: "1rem",
            color: "#155724",
            textAlign: "center",
          }}
        >
          Thank you for your interest! We will contact you within 24 hours to schedule your free consultation.
        </div>
      )}

      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Business Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="challenge">Main Business Challenge</label>
          <textarea
            id="challenge"
            name="challenge"
            rows={4}
            value={formData.challenge}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Scheduling..." : "Schedule Free Consultation"}
        </button>
      </form>
    </div>
  )
}
