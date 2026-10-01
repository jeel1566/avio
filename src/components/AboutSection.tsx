"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ShieldCheck,
  UsersThree,
  Star,
  TrendUp,
  Quotes,
} from "@phosphor-icons/react";

export function AboutSection() {
  const values = [
    {
      title: "Integrity",
      desc: "We do what is right and build trust in everything we do.",
      icon: <ShieldCheck size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Relationships",
      desc: "We value long-term partnerships over short-term gains.",
      icon: <UsersThree size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Excellence",
      desc: "We strive for the highest standards in our work and deliver value.",
      icon: <Star size={24} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Long-Term Growth",
      desc: "We create opportunities that lead to sustainable success.",
      icon: <TrendUp size={24} weight="duotone" className="text-gold-500" />,
    },
  ];

  const bottomStats = [
    { value: "20+", label: "Strategic Partners" },
    { value: "500+", label: "Professionals Connected" },
    { value: "15+", label: "Industries Served" },
    { value: "3K+", label: "Professionals Network" },
    { value: "20+", label: "Years of Combined Experience" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-warm-100 overflow-hidden border-t border-navy-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Row 1: About Us Narrative & Executive Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24">
          
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                ABOUT US
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.08] tracking-tight mb-6">
              People. <br />
              Partnerships. <br />
              <span className="text-gold-500">Progress.</span>
            </h2>

            <p className="text-base text-slateText leading-relaxed font-normal max-w-lg">
              We are an executive search and advisory firm committed to connecting exceptional talent with forward-thinking organizations, while building long-term relationships and driving business growth.
            </p>
          </motion.div>

          {/* Right Column: Collaborative Boardroom Photo & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              {/* Main Boardroom Photo */}
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border border-navy-900/10 bg-navy-950">
                <Image
                  src="/assets/about_team.png"
                  alt="Executives collaborating in boardroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Navy Card Right */}
              <div className="absolute top-6 -right-3 sm:-right-6 bg-navy-900 text-white rounded-2xl p-5 shadow-2xl border border-navy-800 max-w-[200px] sm:max-w-[220px]">
                <p className="font-serif text-lg font-bold leading-tight">
                  A stronger tomorrow <br />
                  <span className="text-gold-500">together.</span>
                </p>
                <span className="w-8 h-[1px] bg-gold-500 mt-2 block" />
              </div>

              {/* Floating White Quote Card */}
              <div className="absolute bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-navy-900/10 max-w-[240px]">
                <div className="flex items-start gap-2.5">
                  <span className="font-serif text-2xl text-gold-500 leading-none">“</span>
                  <div>
                    <p className="font-serif text-xs sm:text-sm font-semibold text-navy-900 leading-snug">
                      Great organizations are built by exceptional people.
                    </p>
                    <span className="w-8 h-[1px] bg-navy-900/20 mt-2 block" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Row 2: Our Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          
          {/* Left Column: Curved Photo of Executive at Sunset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="relative h-[340px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl border border-navy-900/10 bg-navy-950">
                <Image
                  src="/assets/about_executive_sunset.png"
                  alt="Executive visionary looking out city skyline at sunset"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              {/* Floating Navy Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-navy-900 text-white rounded-2xl p-5 shadow-2xl border border-navy-800">
                <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                  Building meaningful connections for a brighter{" "}
                  <span className="text-gold-500">future.</span>
                </p>
                <span className="w-10 h-[1.5px] bg-gold-500 mt-2 block" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values Header & 4 Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                OUR VALUES
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Guided by purpose, driven by people.
            </h3>

            <p className="text-sm sm:text-base text-slateText leading-relaxed mb-8 font-normal">
              Our work is built on a strong foundation of integrity, relationships and a deep understanding of people and business. We believe in creating opportunities, enabling growth and making a lasting impact for organizations and professionals alike.
            </p>

            {/* 4 Value Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white p-5 rounded-2xl border border-navy-900/10 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {v.icon}
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-1">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slateText leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Row 3: Bottom Full Stats Strip */}
        <div className="pt-10 border-t border-navy-900/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {bottomStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-500 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slateText/90 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
