"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { Compass, Target, ShieldCheck, Sparkle, ArrowRight } from "@phosphor-icons/react";

export function AboutSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "compass":
        return <Compass size={28} weight="duotone" className="text-gold-600" />;
      case "target":
        return <Target size={28} weight="duotone" className="text-gold-600" />;
      case "shield":
        return <ShieldCheck size={28} weight="duotone" className="text-gold-600" />;
      case "sparkle":
      default:
        return <Sparkle size={28} weight="duotone" className="text-gold-600" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-warm-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Photo Story on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Duo Executive Photos & Floating Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Top Photo */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Boardroom Advisory Meeting - Avio Advision"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover"
                />
              </div>

              {/* Bottom Photo */}
              <div className="mt-4 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
                  alt="Collaborative Strategic Planning"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover"
                />
              </div>

              {/* Central Floating Quote Card */}
              <div className="absolute top-1/2 left-4 sm:-right-6 sm:left-auto -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-navy-900/10 max-w-xs z-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600 shrink-0">
                    <ArrowRight size={20} weight="bold" />
                  </div>
                  <div>
                    <p className="font-display text-sm sm:text-base font-bold text-navy-900 leading-snug">
                      Great organizations are built by exceptional people.
                    </p>
                    <p className="text-[11px] text-slateText/70 mt-1 font-medium">
                      Avio Advision Core Thesis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Learn More */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-600 mb-3 block">
              About Us
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight mb-6">
              People. Partnerships. <br />
              <span className="text-navy-900">Progress.</span>
            </h2>

            <p className="text-base sm:text-lg text-slateText leading-relaxed mb-6 font-normal">
              We are an executive search and strategic talent advisory firm committed to connecting exceptional talent with forward-thinking organizations, while cultivating long-term relationships and accelerating sustainable business growth.
            </p>

            <p className="text-sm sm:text-base text-slateText/90 leading-relaxed mb-8 font-normal">
              Headquartered in Ahmedabad and serving dynamic enterprises across India and global markets, our specialized advisors unite rigorous executive assessment with deep sector insights to deliver leadership solutions that endure.
            </p>

            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-gold active:scale-[0.98]"
              >
                <span>Explore Our Practice</span>
                <ArrowRight weight="bold" size={14} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Core Value Pillars */}
        <div className="mt-20 pt-12 border-t border-navy-900/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-navy-900/5 hover:border-gold-500/40 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-warm-200/60 flex items-center justify-center mb-4 group-hover:bg-gold-500/15 transition-colors">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slateText leading-relaxed">
                {pillar.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
