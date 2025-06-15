"use client"

import { useState } from "react"

interface AccordionProps {
  title: string
  content: string
  className?: string
}

export default function Accordion({ title, content, className = "" }: AccordionProps) {
  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`accordion ${className}`}>
      <button className="accordion-toggle" onClick={toggleAccordion}>
        {title}
      </button>
      <div className={`accordion-content ${isActive ? "active" : ""}`}>{content}</div>
    </div>
  )
}
