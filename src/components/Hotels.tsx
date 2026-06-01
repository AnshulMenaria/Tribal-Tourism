"use client";

import React from "react";
import styles from "./Hotels.module.css";

interface HotelTeaser {
  id: string;
  name: string;
  location: string;
  description: string;
  status: string;
  percent: number;
  opening: string;
  image: string;
}

const plannedHotels: HotelTeaser[] = [
  {
    id: "aravalli-retreat",
    name: "Aravalli Eco Lodge & Retreat",
    location: "Mahi Lakes, Banswara",
    description: "Nestled on a hillside overlooking the Mahi Dam islands, featuring zero-carbon stone bungalows and private organic farms.",
    status: "Interior Outfitting",
    percent: 85,
    opening: "Opening Winter 2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "udai-bilas-annex",
    name: "Udai Bilas Palace Heritage Annex",
    location: "Gaib Sagar, Dungarpur",
    description: "An exclusive lakeside stone annex built in partnership with heritage architects, spotlighting traditional Dungarpur murals.",
    status: "Contracting & Licensing",
    percent: 92,
    opening: "Opening Autumn 2026",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sitamata-lodge",
    name: "Sitamata Jungle Glamping & Cottages",
    location: "Teak Sanctuary, Pratapgarh",
    description: "Elevated bamboo suites and treehouses designed to observe local wildlife and flying squirrels without disrupting the ecology.",
    status: "Environmental Clearance",
    percent: 60,
    opening: "Opening Early 2027",
    image: "https://images.unsplash.com/photo-1432303491130-c3a504c7759d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "jaisamand-tents",
    name: "Jaisamand Sanctuary Safari Camps",
    location: "Lakeshore, Salumbar",
    description: "High-end luxury canvas tents on the bank of Jaisamand, providing boat safaris, star-gazing decks, and tribal campfire tracks.",
    status: "Ground Clearance & Tenting",
    percent: 45,
    opening: "Opening Mid 2027",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className={`${styles.hotelsBg} section`}>
      <div className="container">
        <h2 className="section-title">Our Partner Stays</h2>
        <p className="section-subtitle">
          We are currently setting up community-owned heritage hotels and eco-resorts. Preview our upcoming listings below.
        </p>

        <div className={styles.grid}>
          {plannedHotels.map((hotel) => (
            <div key={hotel.id} className={styles.card}>
              {/* Glass overlay on hover */}
              <div className={styles.underProcessOverlay}>
                <span className={styles.overlayBadge}>Integration In Progress</span>
              </div>

              {/* Left Image Column */}
              <div className={styles.imageSide}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hotel.image} alt={hotel.name} className={styles.img} loading="lazy" />
              </div>

              {/* Right Info Column */}
              <div className={styles.infoSide}>
                <div>
                  <span className={styles.location}>{hotel.location}</span>
                  <h3 className={styles.title}>{hotel.name}</h3>
                  <p className={styles.desc}>{hotel.description}</p>
                </div>

                {/* Progress bar */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressHeader}>
                    <span className={styles.statusText}>{hotel.status}</span>
                    <span className={styles.pctText}>{hotel.percent}%</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${hotel.percent}%` }}
                    />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", display: "block" }}>
                    {hotel.opening}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
