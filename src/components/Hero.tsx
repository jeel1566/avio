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
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-warm-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 z-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy-900/70">
                PEOPLE &nbsp;|&nbsp; PARTNERSHIPS &nbsp;|&nbsp; PROGRESS
              </span>
              <span className="w-14 h-[1.5px] bg-navy-900/30 inline-block" />
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-[4.25rem] font-bold text-navy-900 leading-[1.05] tracking-tight mb-6">
              Connecting <br />
              Talent, <br />
              <span className="text-gold-500">Building</span> <br />
              <span className="text-gold-500">Businesses.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base text-slateText leading-relaxed max-w-[46ch] mb-8 font-normal">
              Executive search, talent acquisition and strategic advisory for growing organizations. We connect exceptional people with forward-thinking businesses to create long-term value.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.98]"
              >
                <span>Partner With Us</span>
                <ArrowRight weight="bold" size={16} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-navy-900/5 text-navy-900 font-semibold text-sm sm:text-base border border-navy-900/15 transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>Learn More</span>
                <div className="w-5 h-5 rounded-full border border-navy-900/30 flex items-center justify-center">
                  <Play weight="fill" size={10} className="text-navy-900 ml-0.5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Composition matching reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 relative"
          >
            {/* Background Decorative Gold Arc */}
            <div className="absolute -top-12 -left-8 w-72 h-72 border border-gold-500/30 rounded-full pointer-events-none -z-0" />
            <div className="absolute top-24 -left-4 w-3 h-3 rounded-full bg-gold-500 -z-0" />

            <div className="grid grid-cols-12 gap-4 items-stretch relative z-10">
              
              {/* Main Sunset Executives Image Frame (Cols 1-8) */}
              <div className="col-span-8 relative">
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-navy-900/10 bg-navy-950">
                  <Image
                    src="/assets/hero_executives.png"
                    alt="Executives at sunset boardroom - Avio Advision"
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                </div>

                {/* Overlaid Floating Metrics Card */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-navy-900/10 grid grid-cols-3 divide-x divide-navy-900/10">
                  <div className="px-2 sm:px-4 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 block">
                      20+
                    </span>
                    <span className="text-[10px] sm:text-xs text-slateText/80 font-medium leading-tight block mt-0.5">
                      Strategic Partners
                    </span>
                  </div>

                  <div className="px-2 sm:px-4 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 block">
                      500+
                    </span>
                    <span className="text-[10px] sm:text-xs text-slateText/80 font-medium leading-tight block mt-0.5">
                      Professionals Connected
                    </span>
                  </div>

                  <div className="px-2 sm:px-4 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 block">
                      15+
                    </span>
                    <span className="text-[10px] sm:text-xs text-slateText/80 font-medium leading-tight block mt-0.5">
                      Industries Served
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column Side-Rail Frame (Cols 9-12) */}
              <div className="col-span-4 flex flex-col justify-between gap-4">
                
                {/* Top Navy Tag Card */}
                <div className="bg-navy-900 text-white rounded-2xl p-4 border border-navy-800 shadow-md">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">
                    PEOPLE DRIVE POSSIBILITIES.
                  </p>
                  <span className="w-8 h-[1px] bg-gold-500 mt-2 block" />
                </div>

                {/* Glass Skyscraper Image Crop */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-navy-900/10 bg-navy-950">
                  <Image
                    src="/assets/hero_skyscraper.png"
                    alt="Modern skyscraper architectural glass"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                {/* Middle Micro-Tags */}
                <div className="px-2">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy-900/70">
                    STRATEGY PEOPLE GROWTH
                  </p>
                  <span className="w-8 h-[1px] bg-gold-500 mt-1 block" />
                </div>

                {/* Bottom Navy Motto Card */}
                <div className="bg-navy-900 text-white rounded-2xl p-4 border border-navy-800 shadow-md">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90 leading-relaxed">
                    A STRONGER TOMORROW TOGETHER.
                  </p>
                  <span className="w-8 h-[1px] bg-gold-500 mt-2 block" />
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Horizontal Services Strip matching reference image */}
        <div className="mt-20 pt-10 border-t border-navy-900/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-11/12 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10">
            
            {/* 01 Executive Search */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <div className="w-9 h-9 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900 shrink-0">
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
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-9 h-9 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900 shrink-0">
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
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-9 h-9 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900 shrink-0">
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
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-9 h-9 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900 shrink-0">
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

          {/* Scroll Down Trigger */}
          <button
            onClick={scrollToServices}
            className="hidden lg:flex flex-col items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-navy-900/60 hover:text-navy-900 transition-colors shrink-0"
            aria-label="Scroll down"
          >
            <div className="w-9 h-9 rounded-full border border-navy-900/20 flex items-center justify-center hover:border-gold-500 hover:text-gold-600 transition-colors">
              <ArrowDown size={14} weight="bold" />
            </div>
            <span>SCROLL</span>
          </button>
        </div>

      </div>
    </section>
  );
}
