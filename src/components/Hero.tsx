"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  MagnifyingGlass,
  UsersThree,
  FileText,
  ShareNetwork,
  ArrowDown,
} from "@phosphor-icons/react";

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 lg:pt-36 lg:pb-16 bg-warm-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 z-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/70">
                PEOPLE &nbsp;|&nbsp; PARTNERSHIPS &nbsp;|&nbsp; PROGRESS
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-navy-900/30 inline-block" />
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-navy-900 leading-[1.08] sm:leading-[1.06] tracking-tight mb-5 sm:mb-6">
              Connecting <br />
              <span className="italic font-normal">Talent,</span> <br />
              <span className="text-gold-500 font-bold">Building</span> <br />
              <span className="text-gold-500 font-bold">Businesses.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slateText leading-relaxed max-w-[46ch] mb-6 sm:mb-8 font-normal">
              Executive search, talent acquisition and strategic advisory for growing organizations. We connect exceptional people with forward-thinking businesses to create long-term value.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.98]"
              >
                <span>Partner With Us</span>
                <ArrowRight weight="bold" size={16} />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-warm-50 text-navy-900 font-semibold text-sm sm:text-base border border-navy-900/15 hover:border-navy-900/30 transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>Learn More</span>
                <div className="w-6 h-6 rounded-full border border-navy-900/25 group-hover:border-navy-900 flex items-center justify-center transition-colors">
                  <Play weight="fill" size={10} className="text-navy-900 ml-0.5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: User's New Executive Collage Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0"
          >
            {/* The Collage Image */}
            <div className="relative w-full max-w-[620px] mx-auto">
              <Image
                src="/assets/hero_collage.png"
                alt="Modern Corporate Executive Collage - Avio Advision"
                width={1060}
                height={763}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
              />

              {/* Overlaid Navy Quote Card matching reference */}
              <div className="absolute top-2 right-1 sm:top-4 sm:right-4 bg-navy-900 text-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-navy-800 shadow-xl max-w-[135px] sm:max-w-[200px] z-10">
                <p className="text-[9px] sm:text-xs uppercase font-bold tracking-[0.16em] sm:tracking-[0.2em] text-white/95 leading-relaxed">
                  PEOPLE DRIVE POSSIBILITIES.
                </p>
                <span className="w-6 sm:w-8 h-[1.5px] bg-gold-500 mt-2 sm:mt-2.5 block" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Horizontal Services Strip matching reference */}
        <div className="mt-16 pt-8 border-t border-navy-900/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-11/12 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10">
            
            {/* 01 Executive Search */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-navy-900/10 flex items-center justify-center text-navy-900 shrink-0">
                <MagnifyingGlass size={18} weight="bold" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  Executive Search
                </h4>
                <p className="text-xs text-slateText leading-snug mt-0.5">
                  Leadership and C-suite hiring for long-term impact.
                </p>
              </div>
            </div>

            {/* 02 Talent Acquisition */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-navy-900/10 flex items-center justify-center text-navy-900 shrink-0">
                <UsersThree size={18} weight="bold" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  Talent Acquisition
                </h4>
                <p className="text-xs text-slateText leading-snug mt-0.5">
                  End-to-end recruitment solutions across industries.
                </p>
              </div>
            </div>

            {/* 03 HR Advisory */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-navy-900/10 flex items-center justify-center text-navy-900 shrink-0">
                <FileText size={18} weight="bold" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  HR Advisory
                </h4>
                <p className="text-xs text-slateText leading-snug mt-0.5">
                  Strategic workforce planning and consulting.
                </p>
              </div>
            </div>

            {/* 04 Business Networking */}
            <div className="flex items-start gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-navy-900/10 flex items-center justify-center text-navy-900 shrink-0">
                <ShareNetwork size={18} weight="bold" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  Business Networking
                </h4>
                <p className="text-xs text-slateText leading-snug mt-0.5">
                  Connecting businesses with the right opportunities.
                </p>
              </div>
            </div>

          </div>

          {/* SCROLL Down Trigger */}
          <a
            href="#about"
            className="hidden lg:flex flex-col items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-navy-900/60 hover:text-navy-900 transition-colors shrink-0 group"
            aria-label="Scroll down"
          >
            <div className="w-10 h-10 rounded-full border border-navy-900/20 bg-white/70 group-hover:border-gold-500 group-hover:bg-white flex items-center justify-center transition-all shadow-sm">
              <ArrowDown size={14} weight="bold" className="text-navy-900 group-hover:text-gold-600 group-hover:translate-y-0.5 transition-all" />
            </div>
            <span className="text-[9px] tracking-[0.2em]">SCROLL</span>
          </a>
        </div>

      </div>
    </section>
  );
}
