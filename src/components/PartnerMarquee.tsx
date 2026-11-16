"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function PartnerMarquee() {
  const partners = [
    {
      name: "IDFC FIRST Bank",
      category: "Banking & Financial Services",
      type: "idfc",
    },
    {
      name: "Nehra Engineering",
      category: "Engineering & Infrastructure",
      type: "nehra",
    },
    {
      name: "Sanket HR Services",
      category: "Talent Solutions",
      type: "sanket",
    },
    {
      name: "TATA",
      category: "Conglomerate",
      type: "tata",
    },
    {
      name: "Infosys",
      category: "Technology Consulting",
      type: "infosys",
    },
    {
      name: "Deloitte.",
      category: "Audit & Advisory",
      type: "deloitte",
    },
  ];

  // Tripled list for seamless endless marquee loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-warm-100 border-y border-navy-900/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/60">
          TRUSTED BY FORWARD THINKING ORGANIZATIONS
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex w-max items-center gap-14 sm:gap-20 animate-marquee-slow hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default select-none"
            >
              {partner.type === "idfc" && (
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-[#991B1B] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm">
                    F
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-extrabold text-xs tracking-tight text-[#991B1B]">
                      IDFC FIRST
                    </span>
                    <span className="text-[11px] font-semibold text-navy-900 tracking-tight">
                      Bank
                    </span>
                  </div>
                </div>
              )}

              {partner.type === "nehra" && (
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 text-[#0F4C81]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <span className="font-bold text-sm tracking-tight text-navy-900">
                    Nehra <span className="font-normal text-navy-800">Engineering</span>
                  </span>
                </div>
              )}

              {partner.type === "sanket" && (
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rotate-45 border-2 border-gold-500 bg-navy-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold-400" />
                  </div>
                  <span className="font-bold text-sm tracking-tight text-navy-900">
                    Sanket <span className="text-xs font-medium text-navy-700">HR Services</span>
                  </span>
                </div>
              )}

              {partner.type === "tata" && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full border border-[#005A9C] flex items-center justify-center">
                    <span className="font-black text-[10px] text-[#005A9C] tracking-tighter">
                      T
                    </span>
                  </div>
                  <span className="font-black tracking-[0.25em] text-sm text-[#005A9C]">
                    TATA
                  </span>
                </div>
              )}

              {partner.type === "infosys" && (
                <span className="font-bold text-base tracking-tight text-[#007CC3] font-sans">
                  Infosys
                </span>
              )}

              {partner.type === "deloitte" && (
                <span className="font-black text-base tracking-tighter text-navy-950 font-sans">
                  Deloitte<span className="text-[#86BC25] text-lg leading-none">.</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
