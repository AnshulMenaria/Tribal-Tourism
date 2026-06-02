"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import PackageModal from "../components/PackageModal";
import Hotels from "../components/Hotels";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import { Package } from "../data/packages";

export default function Home() {
  // Modal toggle states
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDefaultPackage, setEnquiryDefaultPackage] = useState("");

  // Handler to open the details modal for a specific package
  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  // Handler to open enquiry modal with general interest
  const handleOpenGlobalEnquiry = () => {
    setEnquiryDefaultPackage("");
    setIsEnquiryModalOpen(true);
  };

  // Handler to open enquiry modal prefilled with a specific package name
  const handleOpenPackageEnquiry = (packageName: string) => {
    // Close the details modal first if it is open
    setIsPackageModalOpen(false);
    setEnquiryDefaultPackage(packageName);
    setIsEnquiryModalOpen(true);
  };

  // Smooth scroll helper for Hero view button
  const handleScrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      const headerOffset = 80;
      const elementPosition = packagesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <Header onEnquireClick={handleOpenGlobalEnquiry} />

      <main style={{ minHeight: "100vh" }}>
        {/* Split Screen Hero Showcase */}
        <Hero onExplorePackagesClick={handleScrollToPackages} />

        {/* Dynamic Card Grid Section for 6 Tours */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Teaser section: Partner hotels "Under Process" */}
        <Hotels />

        {/* Contact info, local portal links & Message Form */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <footer
        style={{
          backgroundColor: "#0d0f14",
          borderTop: "1px solid var(--border-color)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--text-muted)"
        }}
      >
        <div className="container">
          <p style={{ marginBottom: "0.5rem" }}>
            &copy; {new Date().getFullYear()} Vagad & Mewal Safaris. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            Promoting sustainable, community-first tribal tourism under the Rajasthan Rural Tourism Scheme.
          </p>
        </div>
      </footer>

      {/* Slide-Up Package Details Overlay */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        onEnquire={handleOpenPackageEnquiry}
      />

      {/* Central Booking & Enquiry Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        defaultPackage={enquiryDefaultPackage}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}
