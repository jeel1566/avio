"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { ArrowRight, GlobeHemisphereWest, Sparkle } from "@phosphor-icons/react";

export function NetworkSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const partnerNodes = [
    {
      id: "idfc",
      name: "IDFC FIRST Bank",
      category: "Banking & Financial Services",
      pos: "top-8 left-1/2 -translate-x-1/2 md:top-12 md:left-28",
      connection: "from-center-to-top-left",
    },
    {
      id: "nehra",
      name: "Nehra Engineering",
      category: "Heavy Engineering & Infrastructure",
      pos: "bottom-10 left-6 md:bottom-14 md:left-24",
      connection: "from-center-to-bottom-left",
    },
    {
      id: "sanket",
      name: "Sanket HR Services",
      category: "Strategic Talent Ecosystem",
      pos: "bottom-8 right-6 md:top-36 md:right-20",
      connection: "from-center-to-right",
    },
  ];

  return (
    <section id="network" className="py-24 md:py-36 bg-navy-950 text-white relative overflow-hidden">
      {/* Background World Map & Constellation Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#16385a_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-navy-800/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkle size={16} weight="fill" className="text-gold-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">
                Global Network
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              A Network That Creates <br />
              <span className="text-gold-400">Opportunities.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 font-normal">
              We work with trusted organizations across diverse industries to create meaningful, high-impact connections for businesses, visionary founders, and senior professionals.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-gold active:scale-[0.98]"
              >
                <span>View All Partners</span>
                <ArrowRight weight="bold" size={16} />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Interactive Constellation Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center"
          >
            {/* SVG Connecting Arc Pathways */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Radial Orbit Circles */}
              <circle cx="200" cy="200" r="80" stroke="#D4AB53" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="200" cy="200" r="140" stroke="#16385A" strokeWidth="1.5" opacity="0.4" />
              <circle cx="200" cy="200" r="190" stroke="#16385A" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />

              {/* Dynamic Connection Beziers */}
              <path d="M 200 200 Q 140 100 100 80" stroke="#D4AB53" strokeWidth="1.5" opacity="0.6" />
              <path d="M 200 200 Q 130 280 80 320" stroke="#D4AB53" strokeWidth="1.5" opacity="0.6" />
              <path d="M 200 200 Q 280 180 320 180" stroke="#D4AB53" strokeWidth="1.5" opacity="0.6" />

              {/* Luminous Pulsing Dots */}
              <circle cx="100" cy="80" r="4" fill="#D4AB53" className="animate-ping" style={{ transformOrigin: "100px 80px" }} />
              <circle cx="80" cy="320" r="4" fill="#D4AB53" className="animate-ping" style={{ transformOrigin: "80px 320px", animationDelay: "1s" }} />
              <circle cx="320" cy="180" r="4" fill="#D4AB53" className="animate-ping" style={{ transformOrigin: "320px 180px", animationDelay: "2s" }} />
            </svg>

            {/* Central Glowing Nexus: Avio Crest */}
            <div className="relative z-20 w-24 h-24 rounded-full bg-navy-900 border-2 border-gold-500/60 shadow-[0_0_50px_rgba(212,171,83,0.35)] flex items-center justify-center p-3">
              <div className="absolute inset-0 rounded-full border border-gold-400/40 animate-ping opacity-40" />
              <Logo size={52} />
            </div>

            {/* Orbiting Partner Badges */}
            {partnerNodes.map((node) => (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`absolute ${node.pos} z-20 cursor-pointer transition-all duration-300 ${
                  activeNode === node.id ? "scale-105 z-30" : "hover:scale-105"
                }`}
              >
                <div className="bg-white/95 text-navy-900 px-4 py-2 rounded-xl shadow-xl border border-gold-500/30 backdrop-blur-md flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  <div className="text-left">
                    <p className="font-display text-xs font-bold text-navy-950 leading-tight">
                      {node.name}
                    </p>
                    <p className="text-[9.5px] text-slateText font-medium hidden sm:block">
                      {node.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: 3-Tier Gold Stats Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-center space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l border-white/10"
          >
            {siteConfig.networkStats.map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-gold-500/70">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-gold-400 tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wider mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
