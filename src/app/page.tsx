import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { NetworkSection } from "@/components/NetworkSection";
import { CareerFormSection } from "@/components/CareerFormSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-warm-100 overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <AboutSection />
      <ServicesSection />
      <NetworkSection />
      <CareerFormSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
