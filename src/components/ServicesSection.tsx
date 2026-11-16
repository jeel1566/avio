"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  MagnifyingGlass,
  UsersThree,
  FileText,
  ShareNetwork,
  Crosshair,
  Gear,
  ChartLineUp,
} from "@phosphor-icons/react";

export function ServicesSection() {
  const approaches = [
    {
      step: "Understand",
      desc: "We listen to your goals and challenges.",
      icon: <Crosshair size={22} weight="bold" className="text-[#C48B28]" />,
    },
    {
      step: "Strategize",
      desc: "We design the right talent solutions.",
      icon: <UsersThree size={22} weight="bold" className="text-[#C48B28]" />,
    },
    {
      step: "Execute",
      desc: "We connect you with exceptional people.",
      icon: <Gear size={22} weight="bold" className="text-[#C48B28]" />,
    },
    {
      step: "Grow",
      desc: "We stay with you for long-term success.",
      icon: <ChartLineUp size={22} weight="bold" className="text-[#C48B28]" />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#0B1F3A]/10">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D4AB53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Left Column (Headline/CTA/Arch) + Right Column (4 Bento Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16 md:mb-20">
          
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA and Glass Skyscraper */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A]">
                  OUR SERVICES
                </span>
                <span className="w-12 h-[1.5px] bg-[#0B1F3A]/40 inline-block" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B1F3A] leading-[1.12] tracking-tight mb-5 sm:mb-6">
                Tailored <br />
                Solutions for <br />
                <span className="text-[#C48B28]">Lasting Growth.</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
                From executive search to strategic advisory, we help organizations build high-performing teams, strengthen leadership and create long-term value.
              </p>

              {/* Explore Button */}
              <div className="mb-8 sm:mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C48B28] hover:bg-[#B37B1E] text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight weight="bold" size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* People | Insights | Impact with Architectural Accent */}
            <div className="pt-2 sm:pt-4 lg:pt-6">
              <div className="w-16 h-[1.5px] bg-[#0B1F3A]/20 mb-3" />
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#0B1F3A]/85 mb-4">
                PEOPLE &nbsp;|&nbsp; INSIGHTS &nbsp;|&nbsp; IMPACT
              </p>

              <div className="relative w-full max-w-[460px] drop-shadow-sm">
                <Image
                  src="/assets/modern_glass_tower.png"
                  alt="Modern Glass Tower with Golden Geometric Accents"
                  width={1519}
                  height={1036}
                  priority
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Bento Cards (2x2 Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            
            {/* Card 01: Executive Search (Dark Navy) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0B1F3A] text-white rounded-2xl shadow-lg border border-[#0B1F3A] flex flex-col-reverse sm:flex-row overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Text Side */}
              <div className="w-full sm:w-[56%] p-5 sm:p-7 flex flex-col justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs font-bold text-[#D4AB53] font-mono tracking-wider">01</span>
                    <span className="w-8 h-[1px] bg-[#D4AB53]/50 inline-block" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] mb-3 sm:mb-4 shadow-inner">
                    <MagnifyingGlass size={20} weight="bold" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 leading-snug">
                    Executive Search
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Leadership and C-suite hiring for long-term impact.
                  </p>
                </div>

                <div className="pt-5 sm:pt-6">
                  <a
                    href="#contact"
                    aria-label="Learn more about Executive Search"
                    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#D4AB53] hover:border-[#D4AB53] hover:text-[#0B1F3A] transition-all duration-200"
                  >
                    <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full sm:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden">
                <Image
                  src="/assets/service_01_photo_clean.png"
                  alt="Executive Search Leadership at sunset window"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Card 02: Talent Acquisition (Warm Light) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white text-[#0B1F3A] rounded-2xl shadow-sm border border-[#0B1F3A]/10 flex flex-col-reverse sm:flex-row overflow-hidden group hover:border-[#C48B28]/40 hover:shadow-md transition-all"
            >
              {/* Text Side */}
              <div className="w-full sm:w-[56%] p-5 sm:p-7 flex flex-col justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs font-bold text-[#0B1F3A]/60 font-mono tracking-wider">02</span>
                    <span className="w-8 h-[1px] bg-[#0B1F3A]/20 inline-block" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] mb-3 sm:mb-4">
                    <UsersThree size={20} weight="bold" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 leading-snug">
                    Talent Acquisition
                  </h3>

                  <p className="text-xs text-[#5A6A80] leading-relaxed font-normal">
                    End-to-end recruitment solutions across industries.
                  </p>
                </div>

                <div className="pt-5 sm:pt-6">
                  <a
                    href="#careers"
                    aria-label="Learn more about Talent Acquisition"
                    className="w-9 h-9 rounded-full border border-[#0B1F3A]/30 flex items-center justify-center text-[#0B1F3A] hover:bg-[#C48B28] hover:border-[#C48B28] hover:text-white transition-all duration-200"
                  >
                    <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full sm:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden">
                <Image
                  src="/assets/service_02_photo_clean.png"
                  alt="Talent Acquisition Specialist reviewing documents"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Card 03: HR Advisory (Warm Light) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-[#0B1F3A] rounded-2xl shadow-sm border border-[#0B1F3A]/10 flex flex-col-reverse sm:flex-row overflow-hidden group hover:border-[#C48B28]/40 hover:shadow-md transition-all"
            >
              {/* Text Side */}
              <div className="w-full sm:w-[56%] p-5 sm:p-7 flex flex-col justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs font-bold text-[#0B1F3A]/60 font-mono tracking-wider">03</span>
                    <span className="w-8 h-[1px] bg-[#0B1F3A]/20 inline-block" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] mb-3 sm:mb-4">
                    <FileText size={20} weight="bold" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 leading-snug">
                    HR Advisory
                  </h3>

                  <p className="text-xs text-[#5A6A80] leading-relaxed font-normal">
                    Strategic workforce planning, organizational development and consulting.
                  </p>
                </div>

                <div className="pt-5 sm:pt-6">
                  <a
                    href="#contact"
                    aria-label="Learn more about HR Advisory"
                    className="w-9 h-9 rounded-full border border-[#0B1F3A]/30 flex items-center justify-center text-[#0B1F3A] hover:bg-[#C48B28] hover:border-[#C48B28] hover:text-white transition-all duration-200"
                  >
                    <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full sm:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden">
                <Image
                  src="/assets/service_03_photo_clean.png"
                  alt="HR Advisory Consultation with executives and laptop"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Card 04: Business Networking (Dark Navy) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-[#0B1F3A] text-white rounded-2xl shadow-lg border border-[#0B1F3A] flex flex-col-reverse sm:flex-row overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Text Side */}
              <div className="w-full sm:w-[56%] p-5 sm:p-7 flex flex-col justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs font-bold text-[#D4AB53] font-mono tracking-wider">04</span>
                    <span className="w-8 h-[1px] bg-[#D4AB53]/50 inline-block" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] mb-3 sm:mb-4 shadow-inner">
                    <ShareNetwork size={20} weight="bold" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 leading-snug">
                    Business Networking
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Connecting businesses with the right opportunities and strategic partnerships.
                  </p>
                </div>

                <div className="pt-5 sm:pt-6">
                  <a
                    href="#contact"
                    aria-label="Learn more about Business Networking"
                    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#D4AB53] hover:border-[#D4AB53] hover:text-[#0B1F3A] transition-all duration-200"
                  >
                    <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full sm:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden">
                <Image
                  src="/assets/service_04_photo_clean.png"
                  alt="Business Networking executives handshake at sunset"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Approach Section: Enclosed White Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl shadow-sm border border-[#0B1F3A]/8 p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A]/80">
                  OUR APPROACH
                </span>
                <span className="w-12 h-[1.5px] bg-[#0B1F3A]/30 inline-block" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight leading-snug">
                More Than Hiring. <br className="hidden sm:inline" />
                A Strategic Partnership.
              </h3>
            </div>

            {/* Right 4 Steps with Dividers */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[#0B1F3A]/10">
              {approaches.map((app, idx) => (
                <div
                  key={app.step}
                  className={`flex flex-col justify-start ${idx > 0 ? "lg:pl-6" : ""} ${idx < 3 ? "lg:pr-6" : ""}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F3EAD8] flex items-center justify-center mb-4 shadow-sm shrink-0">
                    {app.icon}
                  </div>
                  <h4 className="font-bold text-[#0B1F3A] text-base mb-1">
                    {app.step}
                  </h4>
                  <p className="text-xs text-[#5A6A80] leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
