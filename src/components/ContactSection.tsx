"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  LinkedinLogo,
  ArrowRight,
  User,
  Lock,
  CheckCircle,
} from "@phosphor-icons/react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "Executive Search",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`[${formData.subject}] Inquiry from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-100 overflow-hidden border-t border-navy-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1 (Left): Contact Us Narrative & Details (Cols 1-4) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                CONTACT US
              </span>
              <span className="w-12 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.08] tracking-tight mb-5">
              Let's Build <br />
              Stronger <br />
              Possibilities <br />
              <span className="text-gold-500">Together.</span>
            </h2>

            <p className="text-sm sm:text-base text-slateText leading-relaxed mb-8 font-normal">
              Whether you are an organization looking for talent solutions or a professional seeking new opportunities, we'd love to hear from you.
            </p>

            {/* Contact Details List */}
            <div className="space-y-5">
              
              {/* Office */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-warm-200/60 flex items-center justify-center text-gold-600 shrink-0">
                  <MapPin size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Our Office
                  </h4>
                  <p className="text-xs sm:text-sm text-slateText">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-warm-200/60 flex items-center justify-center text-gold-600 shrink-0">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Call Us
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm text-slateText hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-warm-200/60 flex items-center justify-center text-gold-600 shrink-0">
                  <EnvelopeSimple size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Email Us
                  </h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs sm:text-sm text-slateText hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-warm-200/60 flex items-center justify-center text-gold-600 shrink-0">
                  <LinkedinLogo size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Follow Us
                  </h4>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-slateText hover:text-gold-600 transition-colors"
                  >
                    linkedin.com/company/avio-advision
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 2 (Center): Executive Boardroom Photo with Floating Quote (Cols 5-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative h-full flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-navy-900/10 bg-navy-950">
              <Image
                src="/assets/contact_boardroom.png"
                alt="Executive Boardroom Table Sunset View"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              {/* Floating Dark Quote Card */}
              <div className="absolute top-8 left-4 right-4 bg-navy-900/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-navy-800">
                <p className="font-serif text-base sm:text-lg text-white font-bold leading-snug">
                  “ Great conversations today create stronger{" "}
                  <span className="text-gold-500">tomorrows. ”</span>
                </p>
                <span className="w-10 h-[1px] bg-gold-500 mt-2 block" />
              </div>
            </div>
          </motion.div>

          {/* Column 3 (Right): Send Us a Message Form Card (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-navy-900/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900/70">
                GET IN TOUCH
              </span>
              <span className="w-10 h-[1px] bg-navy-900/30 inline-block" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slateText mb-6">
              Fill out the form and our team will get back to you soon.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle size={28} weight="fill" />
                </div>
                <h4 className="font-serif text-xl font-bold text-navy-900">
                  Message Sent
                </h4>
                <p className="text-xs text-slateText max-w-xs mx-auto">
                  Thank you! Your email client has been opened with your inquiry. We look forward to connecting with you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-gold-600 underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-3 pr-3 py-3 rounded-xl bg-warm-50 border border-navy-900/15 text-xs sm:text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-warm-50 border border-navy-900/15 text-xs sm:text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 79 4000 1234"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-warm-50 border border-navy-900/15 text-xs sm:text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-warm-50 border border-navy-900/15 text-xs sm:text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                    >
                      <option value="Executive Search">Executive Search</option>
                      <option value="Talent Acquisition">Talent Acquisition</option>
                      <option value="HR Advisory">HR Advisory</option>
                      <option value="Business Networking">Business Networking</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your organization's goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-warm-50 border border-navy-900/15 text-xs sm:text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.99] cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight weight="bold" size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-slateText/70">
                  <Lock size={12} weight="fill" />
                  <span>Your information is secure and will only be used for official communication.</span>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
