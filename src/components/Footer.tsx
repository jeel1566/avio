"use client";

import React from "react";
import Link from "next/link";
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
    <footer className="bg-navy-950 text-white pt-20 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Logo size={46} withText={true} light={true} />
            </Link>
            
            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-normal">
              {siteConfig.description}
            </p>

            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              {siteConfig.subtagline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-white/70">
                <MapPin size={16} weight="fill" className="text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/70">
                <PhoneCall size={16} weight="fill" className="text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/70">
                <EnvelopeSimple size={16} weight="fill" className="text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/70">
                <LinkedinLogo size={16} weight="fill" className="text-gold-400 shrink-0" />
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Follow on LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Registered in Ahmedabad, India.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-white/40 hidden md:inline">
              People &bull; Partnerships &bull; Progress
            </span>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center transition-all duration-200 border border-white/10"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
