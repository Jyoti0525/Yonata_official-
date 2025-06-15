"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [mobileMenuOpen])

  return (
    <header>
      <nav
        className="container"
        ref={navRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {/* Left: Logo */}
        <Link href="/" className="logo">
          Yonata.ai
        </Link>

        {/* Center: Navigation Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <ul
            className={`nav-links ${mobileMenuOpen ? "active" : ""}`}
            id="navLinks"
            role="menu"
            aria-label="Main navigation"
            style={{
              display: "flex",
              gap: "2.5rem",
            }}
          >
            <li role="none">
              <Link href="/" className={pathname === "/" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                Home
              </Link>
            </li>
            <li role="none">
              <Link href="/solutions" className={pathname === "/solutions" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                Solutions
              </Link>
            </li>
            <li role="none">
              <Link href="/platform" className={pathname === "/platform" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                Platform
              </Link>
            </li>
            <li role="none">
              <Link href="/services" className={pathname === "/services" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                Services
              </Link>
            </li>
            <li role="none">
              <Link href="/about" className={pathname === "/about" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                About
              </Link>
            </li>
            <li role="none">
              <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""} onClick={closeMobileMenu} role="menuitem">
                Contact
              </Link>
            </li>
            <li role="none" className="mobile-cta-container">
              <Link href="/contact" className="mobile-cta-text" onClick={closeMobileMenu} role="menuitem">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div className="desktop-controls" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ThemeToggle />
            <Link
              href="/contact"
              className="cta-button desktop-cta"
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }} // slightly narrower
            >
              Get Started
            </Link>
          </div>
          <div className="mobile-controls">
            <ThemeToggle />
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="navLinks"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
