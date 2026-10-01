"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-warm-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-600 mb-3 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight mb-5">
            Strategic Solutions for <br />
            <span className="text-navy-900">Lasting Growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-slateText leading-relaxed mb-4">
            From executive search to strategic advisory, we help organizations build high-performing teams and create sustainable, long-term enterprise value.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors group"
          >
            <span>Discuss Custom Advisory</span>
            <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const isNavyCard = service.id === "01";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 shadow-md ${
                  isNavyCard
                    ? "bg-navy-900 text-white border border-navy-800 hover:shadow-2xl"
                    : "bg-white text-navy-900 border border-navy-900/10 hover:border-gold-500/50 hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Top Row: Circular ID Badge & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-xs font-bold border transition-colors ${
                        isNavyCard
                          ? "border-gold-500/40 text-gold-400 bg-navy-800/80"
                          : "border-navy-900/15 text-navy-900 bg-warm-100 group-hover:border-gold-500 group-hover:text-gold-600"
                      }`}
                    >
                      {service.id}
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isNavyCard
                          ? "text-white/60 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          : "text-navy-900/40 group-hover:text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    >
                      <ArrowUpRight size={18} weight="bold" />
                    </div>
                  </div>

                  {/* Visual Header / Imagery Frame */}
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6 bg-navy-950/20">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isNavyCard
                          ? "bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent"
                          : "bg-gradient-to-t from-black/50 via-transparent to-transparent"
                      }`}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-display text-xl font-bold tracking-tight mb-1 ${
                      isNavyCard ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      isNavyCard ? "text-gold-400" : "text-gold-600"
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 font-normal ${
                      isNavyCard ? "text-white/80" : "text-slateText"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Service Bullet Highlights */}
                <div
                  className={`pt-4 border-t space-y-2 ${
                    isNavyCard ? "border-navy-800" : "border-navy-900/10"
                  }`}
                >
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle
                        size={14}
                        weight="fill"
                        className={isNavyCard ? "text-gold-400" : "text-gold-600"}
                      />
                      <span
                        className={`text-xs font-medium ${
                          isNavyCard ? "text-white/70" : "text-navy-900/80"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
