import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { NetworkSection } from "@/components/NetworkSection";
import { CareerFormSection } from "@/components/CareerFormSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-warm-100 overflow-x-hidden w-full max-w-full">
      {/* SECTION 1: Navigation & Hero */}
      <Navbar />
      <Hero />

      {/* SECTION 2: About Us (People. Partnerships. Progress. & Our Values) */}
      <AboutSection />

      {/* SECTION 3: Services (Tailored Solutions for Lasting Growth & Our Approach) */}
      <ServicesSection />

      {/* SECTION 4: Strategic Network (Trusted Relationships & Featured Partners) */}
      <NetworkSection />

      {/* SECTION 5: Career Opportunities (Candidate Application Form & Executive Advisory) */}
      <CareerFormSection />

      {/* SECTION 6: Contact Us (Direct Inquiry & Executive Boardroom) */}
      <ContactSection />

      {/* SECTION 7: Official Footer */}
      <Footer />
    </main>
  );
}
