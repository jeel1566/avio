"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Handshake,
  UsersThree,
  ChartLineUp,
  Bank,
  Factory,
  Desktop,
  HeartStraight,
  Briefcase,
  Bag,
} from "@phosphor-icons/react";
import { NetworkMapInteractive } from "./NetworkMapInteractive";

export function NetworkSection() {
  const industries = [
    {
      name: "Banking & Financial Services",
      icon: <Bank size={24} weight="regular" />,
    },
    {
      name: "Engineering & Manufacturing",
      icon: <Factory size={24} weight="regular" />,
    },
    {
      name: "IT & Technology",
      icon: <Desktop size={24} weight="regular" />,
    },
    {
      name: "Healthcare & Life Sciences",
      icon: <HeartStraight size={24} weight="regular" />,
    },
    {
      name: "Professional Services",
      icon: <Briefcase size={24} weight="regular" />,
    },
    {
      name: "Retail & Consumer Goods",
      icon: <Bag size={24} weight="regular" />,
    },
  ];

  return (
    <section id="connections" className="py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#0B1F3A]/10">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#D4AB53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. TOP SPLIT: Left Narrative + Right Constellation Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-20">
          
          {/* Left Column: Heading, Paragraph, CTA, Trust Highlights (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A]">
                  OUR NETWORK
                </span>
                <span className="w-12 h-[1.5px] bg-[#0B1F3A]/40 inline-block" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B1F3A] leading-[1.12] tracking-tight mb-4 sm:mb-5">
                Trusted <br />
                Relationships <br />
                <span className="text-[#C48B28]">Across Industries.</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
                We work with leading organizations across sectors to create meaningful opportunities for businesses and professionals.
              </p>

              {/* CTA Button */}
              <div className="mb-8 sm:mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C48B28] hover:bg-[#B37B1E] text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto group"
                >
                  <span>Our Connections</span>
                  <ArrowRight weight="bold" size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* 3 Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#0B1F3A]/10">
              <div className="flex flex-col items-start">
                <div className="text-[#C48B28] mb-1.5">
                  <Handshake size={22} weight="duotone" />
                </div>
                <span className="text-[11px] font-bold text-[#0B1F3A] leading-tight">
                  Long-Term <br />Partnerships
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="text-[#C48B28] mb-1.5">
                  <UsersThree size={22} weight="duotone" />
                </div>
                <span className="text-[11px] font-bold text-[#0B1F3A] leading-tight">
                  Cross-Industry <br />Network
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="text-[#C48B28] mb-1.5">
                  <ChartLineUp size={22} weight="duotone" />
                </div>
                <span className="text-[11px] font-bold text-[#0B1F3A] leading-tight">
                  Mutual <br />Growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Network Map (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative flex items-center justify-center w-full"
          >
            <NetworkMapInteractive />
          </motion.div>

        </div>

        {/* 3. BOTTOM SECTION: INDUSTRIES WE WORK WITH (Full-Width White Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl shadow-sm border border-[#0B1F3A]/8 p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4">
              <div className="w-12 h-1 bg-[#C48B28] mb-3.5 rounded-full" />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A]/80">
                  INDUSTRIES WE WORK WITH
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight leading-snug">
                Building stronger <br className="hidden sm:inline" />
                businesses together.
              </h3>
            </div>

            {/* Right: 6 Industry Items with Dividers */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-0 sm:divide-x divide-[#0B1F3A]/10">
              {industries.map((ind, idx) => (
                <div
                  key={ind.name}
                  className={`flex flex-col items-center text-center justify-start ${idx > 0 ? "sm:pl-3 lg:pl-4" : ""} ${idx < 5 ? "sm:pr-3 lg:pr-4" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8F6F1] flex items-center justify-center mb-3 text-[#0B1F3A] shadow-xs">
                    {ind.icon}
                  </div>
                  <span className="text-xs font-bold text-[#0B1F3A] leading-snug">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
