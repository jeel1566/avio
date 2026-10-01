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
    <footer className="bg-navy-900 text-white pt-16 pb-10 border-t border-navy-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Column (Cols 1-3) */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size={46} withText={true} light={true} />
            </Link>
            
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/60">
              PEOPLE &nbsp;|&nbsp; PARTNERSHIPS &nbsp;|&nbsp; PROGRESS
            </p>
          </div>

          {/* Quick Links Column (Cols 4-5) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-xs text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column (Cols 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-xs text-white/70">
                <MapPin size={14} weight="fill" className="text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <PhoneCall size={14} weight="fill" className="text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <EnvelopeSimple size={14} weight="fill" className="text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/70">
                <LinkedinLogo size={14} weight="fill" className="text-gold-400 shrink-0" />
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Right Architectural Corner Card (Cols 11-12) */}
          <div className="lg:col-span-2 relative h-36 rounded-2xl overflow-hidden shadow-lg border border-navy-800 bg-navy-950">
            <Image
              src="/assets/hero_skyscraper.png"
              alt="Skyscraper architectural perspective"
              fill
              sizes="200px"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-navy-950/70 p-3 flex flex-col justify-end">
              <p className="text-[9.5px] uppercase font-bold tracking-[0.2em] text-white/90 leading-tight">
                A STRONGER TOMORROW TOGETHER.
              </p>
              <span className="w-8 h-[1px] bg-gold-500 mt-1 block" />
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
              className="w-7 h-7 rounded-full bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center transition-all ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp size={13} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
