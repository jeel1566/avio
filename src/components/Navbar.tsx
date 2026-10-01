"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { List, X, ArrowRight } from "@phosphor-icons/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-100/95 backdrop-blur-md shadow-sm border-b border-navy-900/10 py-3.5"
          : "bg-warm-100/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Logo size={42} withText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-navy-900/80 hover:text-navy-900 transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-gold active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight weight="bold" size={14} />
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
          <div className="lg:hidden pt-4 pb-6 mt-3 border-t border-navy-900/10 flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-navy-900/90 hover:text-navy-900 py-2 px-3 rounded-md hover:bg-navy-900/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm transition-all shadow-sm"
              >
                <span>Partner With Us</span>
                <ArrowRight weight="bold" size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
