"use client";

import React, { useEffect } from "react";
import styles from "./PackageModal.module.css";
import { Package } from "../data/packages";

interface PackageModalProps {
  pkg: Package | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (packageName: string) => void;
}

export default function PackageModal({ pkg, isOpen, onClose, onEnquire }: PackageModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen || !pkg) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} role="dialog" aria-modal="true">
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close details">
          <svg
            className={styles.closeIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Scrollable details */}
        <div className={styles.modalScrollArea}>
          {/* Header Image */}
          <div className={styles.modalHeaderPhoto}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className={styles.modalHeaderImage}
              referrerPolicy="no-referrer"
            />
            <div className={styles.headerTitleWrapper}>
              <span className={styles.headerBadge}>{pkg.days}</span>
              <h2 className={styles.headerTitle}>{pkg.name}</h2>
            </div>
          </div>

          <div className={styles.modalBody}>
            {/* Metadata Grid */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Start Location</span>
                <span className={styles.metaValue}>{pkg.start}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>End Location</span>
                <span className={styles.metaValue}>{pkg.end}</span>
              </div>
            </div>

            {/* Official Link Block */}
            <div className={styles.linkContainer}>
              <a
                href={pkg.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.officialLinkBtn}
              >
                <svg
                  className={styles.linkIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Official Tourism Information Portal
              </a>
            </div>

            {/* Attractions */}
            <div>
              <h3 className={styles.sectionTitle}>Key Attractions</h3>
              <ul className={styles.attractionsList}>
                {pkg.attractions.map((attraction, idx) => (
                  <li key={idx} className={styles.attractionItem}>
                    <svg
                      className={styles.pinIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions and Exclusions side-by-side */}
            <div className={styles.incExcGrid}>
              {/* Inclusions */}
              <div>
                <h3 className={styles.sectionTitle}>What's Included</h3>
                <div className={styles.listGroup}>
                  {pkg.included.map((inc, idx) => (
                    <div key={idx} className={styles.listItem}>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <h3 className={styles.sectionTitle}>What's Excluded</h3>
                <div className={styles.listGroup}>
                  {pkg.excluded.map((exc, idx) => (
                    <div key={idx} className={styles.listItem}>
                      <svg
                        className={styles.crossIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Enquire Now Button */}
        <div className={styles.stickyBottomBar}>
          <div className={styles.bottomPrice}>
            <span className={styles.metaLabel}>Pricing starts at</span>
            <span className={styles.bottomPriceVal}>
              ₹{pkg.price.toLocaleString("en-IN")}{" "}
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>
                / person
              </span>
            </span>
          </div>
          <button
            onClick={() => onEnquire(pkg.name)}
            className={`btn btn-primary ${styles.enquireBtn}`}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
