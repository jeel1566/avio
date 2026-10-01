"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  Handshake,
  UsersThree,
  ChartLineUp,
  Bank,
  Factory,
  Desktop,
  FirstAidKit,
  Briefcase,
  Bag,
  CheckCircle,
} from "@phosphor-icons/react";

export function NetworkSection() {
  const [partnerIndex, setPartnerIndex] = useState(0);

  const networkStats = [
    { value: "20+", label: "Strategic Partners" },
    { value: "150+", label: "Partner Companies" },
    { value: "15+", label: "Industries Served" },
    { value: "3K+", label: "Professionals Network" },
  ];

  const featuredPartners = [
    {
      id: "idfc",
      name: "IDFC FIRST Bank",
      industry: "Banking & Financial Services",
      image: "/assets/partner_idfc.png",
      capabilities: ["Talent Acquisition", "Leadership Hiring", "Workforce Advisory"],
    },
    {
      id: "nehra",
      name: "Nehra Engineering",
      industry: "Engineering & Manufacturing",
      image: "/assets/partner_nehra.png",
      capabilities: ["Executive Search", "Technical Hiring", "Strategic Workforce Planning"],
    },
    {
      id: "sanket",
      name: "Sanket HR Services",
      industry: "HR Consulting & Manpower Services",
      image: "/assets/partner_sanket.png",
      capabilities: ["IT & Non-IT Recruitment", "HR Advisory", "Workforce Solutions"],
    },
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      icon: <Bank size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      name: "Engineering & Manufacturing",
      icon: <Factory size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      name: "IT & Technology",
      icon: <Desktop size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      name: "Healthcare & Life Sciences",
      icon: <FirstAidKit size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      name: "Professional Services",
      icon: <Briefcase size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      name: "Retail & Consumer Goods",
      icon: <Bag size={24} weight="duotone" className="text-gold-500" />,
    },
  ];

  return (
    <section id="network" className="py-20 md:py-28 bg-warm-100 overflow-hidden border-t border-navy-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Split: Left Content + Center Network Map + Right Stats Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Left Column: Heading & Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                OUR NETWORK
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.08] tracking-tight mb-5">
              Trusted <br />
              Relationships <br />
              <span className="text-gold-500">Across Industries.</span>
            </h2>

            <p className="text-base text-slateText leading-relaxed mb-8 font-normal">
              We work with leading organizations across sectors to create meaningful opportunities for businesses and professionals.
            </p>

            <div className="mb-10">
              <a
                href="#careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.98]"
              >
                <span>Our Connections</span>
                <ArrowRight weight="bold" size={16} />
              </a>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-navy-900/10">
              <div className="flex flex-col items-center text-center">
                <Handshake size={22} weight="duotone" className="text-gold-600 mb-1" />
                <span className="text-[10px] font-bold text-navy-900 leading-tight">
                  Long-Term Partnerships
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <UsersThree size={22} weight="duotone" className="text-gold-600 mb-1" />
                <span className="text-[10px] font-bold text-navy-900 leading-tight">
                  Cross-Industry Network
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <ChartLineUp size={22} weight="duotone" className="text-gold-600 mb-1" />
                <span className="text-[10px] font-bold text-navy-900 leading-tight">
                  Mutual Growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: World Map Network Graphic with Glowing Nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px]"
          >
            {/* World Map Background Graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-85">
              <Image
                src="/assets/network_map.png"
                alt="Global Network Map Connections"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain"
              />
            </div>

            {/* Central Glowing Crest */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-gold-500/60 shadow-[0_0_35px_rgba(196,139,40,0.3)] flex items-center justify-center p-2.5">
              <Logo size={46} />
            </div>

            {/* Floating Brand Nodes around map */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              IDFC FIRST Bank
            </div>

            <div className="absolute top-28 left-4 bg-white px-3 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              Nehra Engineering
            </div>

            <div className="absolute top-28 right-4 bg-white px-3 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              Sanket HR Services
            </div>

            <div className="absolute bottom-10 left-20 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              Infosys
            </div>

            <div className="absolute bottom-10 right-20 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              Deloitte
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-navy-900/10 text-[11px] font-bold text-navy-900">
              TATA
            </div>

            <div className="absolute bottom-0 right-4 text-[10px] text-slateText/70 italic hidden sm:block">
              Global relationships for a stronger tomorrow. ↗
            </div>
          </motion.div>

          {/* Right Column: Navy Stats Card matching reference */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-navy-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-navy-800 space-y-6"
          >
            {networkStats.map((item, idx) => (
              <div key={idx} className="border-b border-navy-800 last:border-b-0 pb-5 last:pb-0">
                <span className="font-serif text-3xl font-bold text-gold-500 block">
                  {item.value}
                </span>
                <span className="text-xs text-white/70 font-medium block mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Middle Section: Featured Partners */}
        <div className="mb-24 pt-12 border-t border-navy-900/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                FEATURED PARTNERS
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#careers"
                className="text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors hidden sm:inline-flex items-center gap-1.5"
              >
                <span>View All Partners</span>
                <ArrowRight size={14} weight="bold" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPartnerIndex(Math.max(0, partnerIndex - 1))}
                  className="w-8 h-8 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="Previous partner"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  onClick={() => setPartnerIndex(Math.min(featuredPartners.length - 1, partnerIndex + 1))}
                  className="w-8 h-8 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="Next partner"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* 3 Featured Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-3xl p-6 shadow-md border border-navy-900/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-slate-100">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="90px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-navy-900">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-slateText/80 font-medium">
                        {partner.industry}
                      </p>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    {partner.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} weight="fill" className="text-gold-500 shrink-0" />
                        <span className="text-xs text-navy-900/80 font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-900/10">
                  <a
                    href="#careers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 hover:text-gold-700 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} weight="bold" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Industries We Work With */}
        <div className="pt-12 border-t border-navy-900/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
              INDUSTRIES WE WORK WITH
            </span>
            <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
          </div>

          <h3 className="font-serif text-3xl font-bold text-navy-900 tracking-tight mb-8">
            Building stronger businesses together.
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white p-5 rounded-2xl border border-navy-900/10 shadow-sm flex flex-col items-center text-center justify-center hover:border-gold-500/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <span className="text-xs font-bold text-navy-900 leading-snug">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
