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
      icon: <Crosshair size={26} weight="duotone" className="text-gold-500" />,
    },
    {
      step: "Strategize",
      desc: "We design the right talent solutions.",
      icon: <UsersThree size={26} weight="duotone" className="text-gold-500" />,
    },
    {
      step: "Execute",
      desc: "We connect you with exceptional people.",
      icon: <Gear size={26} weight="duotone" className="text-gold-500" />,
    },
    {
      step: "Grow",
      desc: "We stay with you for long-term success.",
      icon: <ChartLineUp size={26} weight="duotone" className="text-gold-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-warm-100 overflow-hidden border-t border-navy-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Split: Left Headline/CTA + Right 4-Card 2x2 Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-24">
          
          {/* Left Column: Heading, Subtext, CTA and Architecture Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                  OUR SERVICES
                </span>
                <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.08] tracking-tight mb-6">
                Tailored <br />
                Solutions for <br />
                <span className="text-gold-500">Lasting Growth.</span>
              </h2>

              <p className="text-base text-slateText leading-relaxed mb-8 font-normal">
                From executive search to strategic advisory, we help organizations build high-performing teams, strengthen leadership and create long-term value.
              </p>

              <div className="mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.98]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight weight="bold" size={16} />
                </a>
              </div>
            </div>

            {/* Architectural Accent Box at Bottom of Left Column */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-navy-900/10 h-44 bg-navy-950">
              <Image
                src="/assets/service_architecture.png"
                alt="Modern corporate glass architecture"
                fill
                sizes="400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/90">
                  PEOPLE &nbsp;|&nbsp; INSIGHTS &nbsp;|&nbsp; IMPACT
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Bento Cards (2x2 Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 01: Executive Search (Navy Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-navy-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-navy-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-gold-500 font-mono tracking-wider">01</span>
                  <span className="w-8 h-[1px] bg-gold-500/50 inline-block" />
                </div>

                <div className="w-10 h-10 rounded-full bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-500 mb-4">
                  <MagnifyingGlass size={20} weight="bold" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">
                  Executive Search
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-6 font-normal">
                  Leadership and C-suite hiring for long-term impact.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <a
                  href="#careers"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all shrink-0"
                >
                  <ArrowRight size={16} weight="bold" />
                </a>

                <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image
                    src="/assets/service_search.png"
                    alt="Executive Search Leadership"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 02: Talent Acquisition (Warm Light Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white text-navy-900 rounded-3xl p-6 sm:p-7 shadow-md border border-navy-900/10 flex flex-col justify-between hover:border-gold-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-navy-900/60 font-mono tracking-wider">02</span>
                  <span className="w-8 h-[1px] bg-navy-900/20 inline-block" />
                </div>

                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-gold-600 mb-4">
                  <UsersThree size={20} weight="bold" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">
                  Talent Acquisition
                </h3>

                <p className="text-xs text-slateText leading-relaxed mb-6 font-normal">
                  End-to-end recruitment solutions across industries.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <a
                  href="#careers"
                  className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all shrink-0"
                >
                  <ArrowRight size={16} weight="bold" />
                </a>

                <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image
                    src="/assets/service_talent.png"
                    alt="Talent Acquisition Specialist"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 03: HR Advisory (Warm Light Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-navy-900 rounded-3xl p-6 sm:p-7 shadow-md border border-navy-900/10 flex flex-col justify-between hover:border-gold-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-navy-900/60 font-mono tracking-wider">03</span>
                  <span className="w-8 h-[1px] bg-navy-900/20 inline-block" />
                </div>

                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-gold-600 mb-4">
                  <FileText size={20} weight="bold" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">
                  HR Advisory
                </h3>

                <p className="text-xs text-slateText leading-relaxed mb-6 font-normal">
                  Strategic workforce planning, organizational development and consulting.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <a
                  href="#careers"
                  className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all shrink-0"
                >
                  <ArrowRight size={16} weight="bold" />
                </a>

                <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image
                    src="/assets/service_advisory.png"
                    alt="HR Advisory Boardroom Consultation"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 04: Business Networking (Navy Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-navy-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-navy-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-gold-500 font-mono tracking-wider">04</span>
                  <span className="w-8 h-[1px] bg-gold-500/50 inline-block" />
                </div>

                <div className="w-10 h-10 rounded-full bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-500 mb-4">
                  <ShareNetwork size={20} weight="bold" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">
                  Business Networking
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-6 font-normal">
                  Connecting businesses with the right opportunities and strategic partnerships.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all shrink-0"
                >
                  <ArrowRight size={16} weight="bold" />
                </a>

                <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image
                    src="/assets/service_networking.png"
                    alt="Business Networking Partnership"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Approach Section */}
        <div className="pt-12 border-t border-navy-900/10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                OUR APPROACH
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              More Than Hiring. A Strategic Partnership.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10">
            {approaches.map((app, idx) => (
              <div key={app.step} className="pt-4 sm:pt-0 sm:px-6 first:pl-0">
                <div className="w-12 h-12 rounded-2xl bg-white border border-navy-900/10 flex items-center justify-center mb-4 shadow-sm">
                  {app.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-navy-900 mb-1">
                  {app.step}
                </h4>
                <p className="text-xs text-slateText leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
