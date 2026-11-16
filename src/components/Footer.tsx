"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  LinkedinLogo,
  ArrowUp,
} from "@phosphor-icons/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AB53]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Brand & Philosophy Column (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <Logo size={46} withText={true} light={true} />
            </Link>
            
            <p className="text-[11px] uppercase tracking-[0.24em] font-bold text-white/60 pt-2">
              PEOPLE &nbsp;|&nbsp; PARTNERSHIPS &nbsp;|&nbsp; PROGRESS
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-normal">
              Connecting senior leadership with forward-thinking enterprises. Building sustainable value through precision executive search and strategic workforce advisory.
            </p>
          </div>

          {/* Links & Services Group (2 cols on mobile, 4 cols on desktop) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="#connections" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Connections
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Career Opportunities
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Our Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Executive Search
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Talent Acquisition
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    HR Advisory
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-xs text-white/70 hover:text-[#D4AB53] transition-colors">
                    Business Networking
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Column (Cols 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-xs text-white/70">
                <MapPin size={15} weight="fill" className="text-[#D4AB53] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <PhoneCall size={15} weight="fill" className="text-[#D4AB53] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#D4AB53] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <EnvelopeSimple size={15} weight="fill" className="text-[#D4AB53] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D4AB53] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <LinkedinLogo size={15} weight="fill" className="text-[#D4AB53] shrink-0" />
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AB53] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Right Architectural Perspective Box (Cols 11-12) */}
          <div className="lg:col-span-2 relative h-40 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-[#06152B] group">
            <Image
              src="/assets/hero_skyscraper.png"
              alt="Skyscraper architectural perspective"
              fill
              sizes="220px"
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <p className="font-serif text-[12px] font-bold text-white tracking-wide leading-tight">
                A STRONGER <br />
                TOMORROW <br />
                <span className="text-[#D4AB53]">TOGETHER.</span>
              </p>
              <span className="w-8 h-[1.5px] bg-[#C48B28] mt-2 block" />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; 2026 Avio Advision LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">&bull;</span>
            <a href="#about" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C48B28] text-white hover:text-[#0B1F3A] flex items-center justify-center transition-all ml-2 cursor-pointer shadow-xs"
              aria-label="Back to Top"
            >
              <ArrowUp size={14} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
