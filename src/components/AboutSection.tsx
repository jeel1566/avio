"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ShieldCheck,
  UsersThree,
  Star,
  TrendUp,
  ArrowRight,
} from "@phosphor-icons/react";

export function AboutSection() {
  const values = [
    {
      title: "Integrity",
      desc: "We do what is right and build trust in everything we do.",
      icon: <ShieldCheck size={22} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Relationships",
      desc: "We value long-term partnerships over short-term gains.",
      icon: <UsersThree size={22} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Excellence",
      desc: "We strive for the highest standards in our work and deliver value.",
      icon: <Star size={22} weight="duotone" className="text-gold-500" />,
    },
    {
      title: "Long-Term Growth",
      desc: "We create opportunities that lead to sustainable success.",
      icon: <TrendUp size={22} weight="duotone" className="text-gold-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-warm-100 overflow-hidden border-t border-navy-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ROW 1: About Us Narrative & Collaborative Boardroom Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24 lg:mb-32">
          
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 z-10"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                ABOUT US
              </span>
              <span className="w-10 sm:w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.08] sm:leading-[1.06] tracking-tight mb-5 sm:mb-6">
              People. <br />
              Partnerships. <br />
              <span className="text-gold-500">Progress.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slateText leading-relaxed font-normal max-w-lg mb-6 sm:mb-8">
              We are an executive search and advisory firm committed to connecting exceptional talent with forward-thinking organizations, while building long-term relationships and driving business growth.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-gold active:scale-[0.98]"
            >
              <span>Learn More</span>
              <ArrowRight weight="bold" size={15} />
            </a>
          </motion.div>

          {/* Right Column: User's Transparent Boardroom Collage Asset + Floating Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[760px]">
              <Image
                src="/assets/about_stronger_tomorrow.png"
                alt="Stronger Tomorrow Together - Avio Advision"
                width={1686}
                height={933}
                priority
                className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

        </div>

        {/* ROW 2: Our Values & Sunset Visionary Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: User's Transparent Sunset Visionary Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[620px]">
              <Image
                src="/assets/about_connections_sunset.png"
                alt="Building Meaningful Connections at Sunset - Avio Advision"
                width={1568}
                height={1003}
                className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

          {/* Right Column: Values Header & 4 Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                OUR VALUES
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 tracking-tight leading-[1.12] mb-5">
              Guided by purpose, <br className="hidden sm:inline" />
              driven by people.
            </h3>

            <p className="text-base text-slateText leading-relaxed mb-8 font-normal max-w-xl">
              Our work is built on a strong foundation of integrity, relationships and a deep understanding of people and business. We believe in creating opportunities, enabling growth and making a lasting impact for organizations and professionals alike.
            </p>

            {/* 4 Value Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white/80 hover:bg-white p-5 rounded-2xl border border-navy-900/10 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center mb-3 group-hover:bg-gold-500/10 group-hover:scale-105 transition-all">
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

      </div>
    </section>
  );
}
