"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onEnquireClick: () => void;
}

export default function Header({ onEnquireClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Add background blur/color after scrolling 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view to set active link
      const sections = ["home", "packages", "hotels", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => handleNavClick("home")}>
          <svg
            className={styles.logoIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Custom tribal sun/wheel SVG */}
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            <path d="M12 8a4 4 0 0 1 4 4m-8 0a4 4 0 0 1 4-4" />
          </svg>
          <div className={styles.logoText}>
            <span>VAGAD & MEWAL SAFARIS</span>
            <span className={styles.logoSub}>Tribal Rajasthan</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <span
                onClick={() => handleNavClick("home")}
                className={`${styles.navLink} ${
                  activeSection === "home" ? styles.activeLink : ""
                }`}
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavClick("packages")}
                className={`${styles.navLink} ${
                  activeSection === "packages" ? styles.activeLink : ""
                }`}
              >
                Packages
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavClick("hotels")}
                className={`${styles.navLink} ${
                  activeSection === "hotels" ? styles.activeLink : ""
                }`}
              >
                Hotels
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavClick("contact")}
                className={`${styles.navLink} ${
                  activeSection === "contact" ? styles.activeLink : ""
                }`}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className={styles.headerActions}>
          <button
            onClick={onEnquireClick}
            className="btn btn-primary"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Hamburger Menu Trigger */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavLinks}>
          <li>
            <span
              onClick={() => handleNavClick("home")}
              className={`${styles.mobileNavLink} ${
                activeSection === "home" ? styles.mobileActiveLink : ""
              }`}
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => handleNavClick("packages")}
              className={`${styles.mobileNavLink} ${
                activeSection === "packages" ? styles.mobileActiveLink : ""
              }`}
            >
              Packages
            </span>
          </li>
          <li>
            <span
              onClick={() => handleNavClick("hotels")}
              className={`${styles.mobileNavLink} ${
                activeSection === "hotels" ? styles.mobileActiveLink : ""
              }`}
            >
              Hotels
            </span>
          </li>
          <li>
            <span
              onClick={() => handleNavClick("contact")}
              className={`${styles.mobileNavLink} ${
                activeSection === "contact" ? styles.mobileActiveLink : ""
              }`}
            >
              Contact Us
            </span>
          </li>
          <li style={{ marginTop: "1rem" }}>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onEnquireClick();
              }}
              className="btn btn-primary"
            >
              Enquire Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
