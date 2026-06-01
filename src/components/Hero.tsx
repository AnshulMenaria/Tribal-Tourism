"use client";

import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  onExplorePackagesClick: () => void;
}

export default function Hero({ onExplorePackagesClick }: HeroProps) {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Left Split - Half Screen Background Image */}
      <div className={styles.splitLeft}>
        <div className={styles.leftContent}>
          <span className={styles.locationBadge}>Vagad Region</span>
          <h2 className={styles.leftTitle}>Misty Hills & Sacred Confluences</h2>
          <p className={styles.leftSubtitle}>
            Witness the monsoons turn the rugged cliffs of Banswara and Dungarpur into a lush green paradise, dotted with rivers and ancient temples.
          </p>
        </div>
      </div>

      {/* Right Split - Contrasting Brief Column */}
      <div className={styles.splitRight}>
        <div className={styles.rightContent}>
          <span className={styles.tagline}>Indigenous Heritage</span>
          <h1 className={styles.mainTitle}>
            Experience <span className={styles.highlightText}>Tribal</span> Tourism
          </h1>
          <p className={styles.description}>
            Welcome to the land of the Bhils. Nestled in the southern highlands of Rajasthan, this circuit offers a rare window into age-old tribal traditions, authentic organic forest gastronomy, vibrant weekly haat bazaars, and pristine, unexplored eco-zones.
          </p>

          {/* Targeted Cities */}
          <div className={styles.citiesList}>
            <span className={styles.cityTag}>Banswara</span>
            <span className={styles.cityTag}>Dungarpur</span>
            <span className={styles.cityTag}>Pratapgarh</span>
            <span className={styles.cityTag}>Salumbar</span>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionsGroup}>
            <button onClick={onExplorePackagesClick} className="btn btn-primary">
              View Tour Packages
            </button>
            <a
              href="https://www.tourism.rajasthan.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnMoreLink}
            >
              Official Rajasthan Tourism
              <svg
                className={styles.arrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          
          <div style={{ marginTop: "1.5rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Want to learn more? Search on Google for{" "}
              <a 
                href="https://www.google.com/search?q=tribal+tourism+rajasthan+banswara+dungarpur+pratapgarh+salumbar" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "var(--accent-secondary)", textDecoration: "underline", fontWeight: 600 }}
              >
                Vagad Tribal Circuit
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
