"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { List, X, ArrowRight, Briefcase } from "@phosphor-icons/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Dynamic Scrollspy to accurately highlight active section
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "connections", "careers", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-100/95 backdrop-blur-md shadow-sm border-b border-navy-900/10 py-3"
          : "bg-warm-100/80 backdrop-blur-sm py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center shrink-0">
            <Logo size={40} withText={true} />
          </Link>

          {/* Desktop Navigation Links with Dynamic Highlighting */}
          <nav className="hidden xl:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-tight relative py-1.5 transition-all ${
                    isActive
                      ? "text-navy-950 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold-500"
                      : "text-navy-900/70 hover:text-navy-900 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Dual Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* 1. For Candidates: Careers Portal */}
            <a
              href="#careers"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-navy-900/20 hover:border-gold-500 bg-white/70 hover:bg-white text-navy-900 hover:text-gold-600 font-semibold text-xs transition-all duration-200 shadow-2xs"
            >
              <Briefcase size={14} weight="bold" className="text-gold-500" />
              <span>Join Network</span>
            </a>

            {/* 2. For Companies: Executive Tie-Up */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs transition-all duration-200 shadow-sm hover:shadow-gold active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight weight="bold" size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-navy-900 hover:bg-navy-900/5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 mt-3 border-t border-navy-900/10 flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-navy-900/10 text-navy-950 font-bold"
                      : "text-navy-900/80 hover:bg-navy-900/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                </a>
              );
            })}
            
            {/* Dual CTA Buttons in Mobile Dropdown */}
            <div className="pt-3 border-t border-navy-900/10 grid grid-cols-2 gap-2">
              <a
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-navy-900/20 bg-white text-navy-900 text-xs font-bold shadow-2xs"
              >
                <Briefcase size={14} weight="bold" className="text-gold-500" />
                <span>Join Network</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gold-500 text-white text-xs font-bold shadow-sm"
              >
                <span>Partner With Us</span>
                <ArrowRight weight="bold" size={13} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
