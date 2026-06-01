"use client";

import React, { useState, useEffect } from "react";
import styles from "./EnquiryModal.module.css";
import { travelPackages } from "../data/packages";

interface EnquiryModalProps {
  isOpen: boolean;
  defaultPackage: string;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, defaultPackage, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    packageName: "",
    date: "",
    guests: "1",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync selected package from parent when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        packageName: defaultPackage || "general"
      }));
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setIsSubmitted(false);
      setError("");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, defaultPackage]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setError("Please fill out all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      setError("Please enter a valid phone number (10-12 digits).");
      return;
    }

    setIsSubmitting(true);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        packageName: "general",
        date: "",
        guests: "1",
        notes: ""
      });
    }, 1500);
  };

  // Get current date formatted for min date attribute in input (cannot book in past)
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} role="dialog" aria-modal="true">
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close form">
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

        {isSubmitted ? (
          <div className={styles.successContainer}>
            <div className={styles.successCircle}>
              <svg
                className={styles.successCheck}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className={styles.successTitle}>Enquiry Received!</h3>
            <p className={styles.successMessage}>
              Your custom tour request has been logged successfully. A travel advisor from Vagad Safaris will contact you on your phone number or email within 12 hours with customized options.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className={styles.modalTitle}>Book / Enquire Tour</h3>
            <p className={styles.modalSubtitle}>
              Please fill out the form below. We will customize the package to fit your exact group size and dates.
            </p>

            {error && (
              <div
                style={{
                  color: "var(--accent-red)",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                  fontWeight: 600
                }}
              >
                {error}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="modal-name" className={styles.label}>
                Full Name *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your name"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-email" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your email address"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-phone" className={styles.label}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter 10-digit mobile number"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-package" className={styles.label}>
                Select Tour Package
              </label>
              <select
                id="modal-package"
                name="packageName"
                value={formData.packageName}
                onChange={handleChange}
                className={styles.select}
                disabled={isSubmitting}
              >
                <option value="general">General Vagad Circuit Enquiry</option>
                {travelPackages.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Date & Guests side-by-side */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="modal-date" className={styles.label}>
                  Travel Date *
                </label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  min={getTodayDateString()}
                  value={formData.date}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="modal-guests" className={styles.label}>
                  Guests
                </label>
                <select
                  id="modal-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={styles.select}
                  disabled={isSubmitting}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-5">3 - 5 People</option>
                  <option value="6-10">6 - 10 People</option>
                  <option value="11+">Group (11+)</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-notes" className={styles.label}>
                Special Notes / Customizations
              </label>
              <textarea
                id="modal-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Mention any custom plans, dietary preferences, or flight timings"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting Enquiry..." : "Submit Travel Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
