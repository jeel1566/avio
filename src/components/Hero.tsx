"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-warm-100">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-b from-navy-900/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-t from-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-[11px] font-bold tracking-[0.22em] text-navy-900/70 uppercase">
                PEOPLE &nbsp;|&nbsp; PARTNERSHIPS &nbsp;|&nbsp; PROGRESS
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold tracking-tight text-navy-900 leading-[1.08] mb-6">
              Connecting Talent, <br className="hidden sm:inline" />
              <span className="text-navy-900">Building Businesses.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slateText leading-relaxed max-w-[54ch] mb-8 font-normal">
              {siteConfig.description}
            </p>

            {/* CTA Triggers */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#careers"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.98]"
              >
                <span>Partner With Us</span>
                <ArrowRight weight="bold" size={16} />
              </a>

              <a
                href="#careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-navy-900/5 text-navy-900 font-semibold text-sm sm:text-base border border-navy-900/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Opportunities</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="pt-8 border-t border-navy-900/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slateText/80 font-medium mt-0.5 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Articulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Rounded Image Frame with Navy Backdrop */}
              <div className="relative bg-navy-900 rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-4 border border-navy-800">
                
                {/* Executive Portrait inside architectural cutout */}
                <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-navy-950">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
                    alt="Corporate Executive Portrait - Avio Advision"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter brightness-[0.98] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />
                  
                  {/* Floating Quote Badge */}
                  <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md border border-gold-500/30 rounded-xl px-4 py-2.5 max-w-[170px] shadow-lg">
                    <p className="text-[11px] text-white/90 font-medium leading-tight">
                      People Drive <br />
                      <span className="text-gold-400 font-bold">Possibilities.</span>
                    </p>
                  </div>

                  {/* Corner Accent Graphic */}
                  <div className="absolute bottom-4 left-4 right-4 bg-warm-100/90 backdrop-blur-md rounded-xl p-3 border border-white/40 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-navy-900/60">
                        Executive Practice
                      </p>
                      <p className="text-xs font-bold text-navy-900">
                        Leadership & Strategic Advisory
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

              </div>

              {/* Secondary Floating Architectural Crop */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-warm-100 bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                  alt="Modern Architectural Glass Facade"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
