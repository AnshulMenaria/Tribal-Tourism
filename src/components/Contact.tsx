"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill out all fields.");
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
    
    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className={`${styles.contactBg} section`}>
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions about the Vagad & Mewal circuit? Want a custom tribal itinerary? Reach out to our travel directors.
        </p>

        <div className={styles.splitGrid}>
          {/* Left Column - Contact Details */}
          <div className={styles.infoColumn}>
            <div>
              <h3 className={styles.introTitle}>Headquarters</h3>
              <p className={styles.introDesc}>
                Our base office is located in Banswara, the center of the Vagad & Mewal circuit. Stop by for maps, itinerary plans, or to meet our local guides.
              </p>

              <div className={styles.contactList}>
                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className={styles.infoTextWrapper}>
                    <span className={styles.infoLabel}>Call Us</span>
                    <span className={styles.infoValue}>+91 94140 12345</span>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className={styles.infoTextWrapper}>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>
                      <a href="mailto:info@vagadsafaris.com" className={styles.linkValue}>info@vagadsafaris.com</a>
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={styles.infoTextWrapper}>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>102, Mahi Bajaj Sagar Road, Banswara, Rajasthan - 327001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* District government portals */}
            <div style={{ marginTop: "auto" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem", fontWeight: 600, textTransform: "uppercase" }}>
                District Portals:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem" }}>
                <a href="https://banswara.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className={styles.linkValue}>Banswara</a>
                <a href="https://dungarpur.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className={styles.linkValue}>Dungarpur</a>
                <a href="https://pratapgarh.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className={styles.linkValue}>Pratapgarh</a>
                <a href="https://salumbar.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className={styles.linkValue}>Salumbar</a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={styles.formCard}>
            {isSubmitted ? (
              <div className={styles.successContainer}>
                <div className={styles.successCircle}>
                  <svg className={styles.successCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successMessage}>
                  Thank you for reaching out. A travel specialist from our Vagad & Mewal team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: "2rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Send an Inquiry</h3>
                
                {error && (
                  <div style={{ color: "var(--accent-red)", fontSize: "0.85rem", marginBottom: "1rem", fontWeight: 600 }}>
                    {error}
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. 9876543210"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="What would you like to ask or customize?"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
