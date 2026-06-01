"use client";

import React from "react";
import styles from "./Packages.module.css";
import { travelPackages, Package } from "../data/packages";

interface PackagesProps {
  onSelectPackage: (pkg: Package) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section id="packages" className={`${styles.sectionBg} section`}>
      <div className="container">
        <h2 className="section-title">Explore Our Tribal Journeys</h2>
        <p className="section-subtitle">
          Carefully crafted itineraries offering authentic interactions, eco-safaris, and scenic explorations across southern Rajasthan.
        </p>

        <div className={styles.packagesGrid}>
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={styles.card}
              onClick={() => onSelectPackage(pkg)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectPackage(pkg);
                }
              }}
            >
              {/* Image Section */}
              <div className={styles.imageWrapper}>
                <div className={styles.badgeOverlay}>{pkg.days}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{pkg.name}</h3>
                <p className={styles.cardDesc}>{pkg.description}</p>

                {/* Footer price & CTA */}
                <div className={styles.cardFooter}>
                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>₹{pkg.price.toLocaleString("en-IN")}</span>
                  </div>
                  <button className={`btn btn-secondary ${styles.exploreBtn}`}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
