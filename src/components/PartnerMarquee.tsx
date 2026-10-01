"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function PartnerMarquee() {
  const partners = siteConfig.partners;
  // Duplicate for seamless infinite loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-10 bg-warm-100 border-y border-navy-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/50">
          Trusted By Forward Thinking Organizations
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max items-center gap-12 sm:gap-16 animate-marquee-slow hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-900/5 flex items-center justify-center font-display font-bold text-navy-900 text-xs border border-navy-900/10 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-colors">
                {partner.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-navy-900/70 group-hover:text-navy-900 transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
