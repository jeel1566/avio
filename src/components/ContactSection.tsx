"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  LinkedinLogo,
  ArrowRight,
  User,
  ChatCircleText,
  LockKey,
  CheckCircle,
  Tag,
  CaretDown,
  Buildings,
  SpinnerGap,
  WarningCircle,
} from "@phosphor-icons/react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    workEmail: "",
    mobile: "",
    serviceRequired: "Executive Search & Leadership Hiring",
    location: "Ahmedabad, Gujarat",
    mandateDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.workEmail || !formData.mobile) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit mandate inquiry. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#0B1F3A]/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D4AB53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1 (Left): Contact Narrative & Details (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#0B1F3A]">
                  CONTACT US
                </span>
                <span className="w-10 sm:w-12 h-[1.5px] bg-[#0B1F3A]/40 inline-block" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-[1.12] tracking-tight mb-4 sm:mb-5">
                Let's Build <br />
                Stronger <br />
                Possibilities <br />
                <span className="text-[#C48B28]">Together.</span>
              </h2>

              {/* Narrative */}
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6 sm:mb-8 font-normal max-w-sm">
                Whether you are an organization looking for talent solutions or a professional seeking new opportunities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details List with Golden Badges */}
            <div className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
              
              {/* Office */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] shrink-0 mt-0.5 shadow-xs">
                  <MapPin size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-0.5">
                    Our Office
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6A80] leading-snug">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] shrink-0 mt-0.5 shadow-xs">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-0.5">
                    Call Us
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm text-[#5A6A80] hover:text-[#C48B28] transition-colors font-medium"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] shrink-0 mt-0.5 shadow-xs">
                  <EnvelopeSimple size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-0.5">
                    Email Us
                  </h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs sm:text-sm text-[#5A6A80] hover:text-[#C48B28] transition-colors font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] shrink-0 mt-0.5 shadow-xs">
                  <LinkedinLogo size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-0.5">
                    Follow Us
                  </h4>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#5A6A80] hover:text-[#C48B28] transition-colors font-medium"
                  >
                    linkedin.com/company/avio-advision
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 2 (Center): Executive Boardroom Photo (3 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative h-72 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] flex items-center justify-center"
          >
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#0B1F3A]/10 bg-[#0B1F3A] group">
              <Image
                src="/assets/contact_boardroom.png"
                alt="Executive Boardroom Sunset View"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Subtle gradient vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-[#0B1F3A]/40 pointer-events-none" />

              {/* Quote Card Overlay */}
              <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-[220px] p-4 sm:p-5 rounded-xl bg-[#0B1F3A]/90 backdrop-blur-md border border-[#D4AB53]/35 shadow-2xl">
                <p className="font-serif text-sm sm:text-base text-white leading-snug">
                  <span className="text-[#D4AB53] text-xl font-serif">“</span>Great conversations today create stronger{" "}
                  <span className="text-[#D4AB53] font-bold">tomorrows.„</span>
                </p>
                <div className="w-8 h-[2px] bg-[#D4AB53] mt-3" />
              </div>
            </div>
          </motion.div>

          {/* Column 3 (Right): Company Tie-Up Form Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-9 shadow-xl border border-[#0B1F3A]/8 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A]/80">
                  FOR COMPANIES & ENTERPRISES
                </span>
                <span className="w-12 h-[1.5px] bg-[#0B1F3A]/30 inline-block" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-1.5">
                Executive & Corporate Tie-Up
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6A80] mb-6">
                Mandate Avio Advision for leadership hiring, strategic talent acquisition, or executive advisory.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle size={32} weight="fill" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#0B1F3A]">
                    Mandate Inquiry Recorded
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6A80] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B1F3A]">{formData.contactPerson || "Partner"}</span>. Your corporate tie-up mandate for <span className="font-semibold text-[#0B1F3A]">{formData.companyName || "your enterprise"}</span> has been recorded directly in our executive pipeline. Our advisory team will reach out promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          companyName: "",
                          contactPerson: "",
                          workEmail: "",
                          mobile: "",
                          serviceRequired: "Executive Search & Leadership Hiring",
                          location: "Ahmedabad, Gujarat",
                          mandateDetails: "",
                        });
                      }}
                      className="text-xs font-bold text-[#C48B28] hover:text-[#B37B1E] underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Company Name & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <Buildings size={17} weight="bold" />
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="Company / Enterprise Name *"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Contact Person */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <User size={17} weight="bold" />
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="Contact Person & Title *"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Business Email & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <EnvelopeSimple size={17} weight="bold" />
                        </span>
                        <input
                          type="email"
                          required
                          placeholder="Business Email *"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <PhoneCall size={17} weight="bold" />
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Phone / Mobile Number *"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service Required & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <Tag size={17} weight="bold" />
                        </span>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Executive Search & Leadership Hiring">Executive Search (CXO/Director)</option>
                          <option value="Talent Acquisition & Volume Hiring">Talent Acquisition (Mid-Senior)</option>
                          <option value="HR Advisory & Workforce Planning">HR Advisory & Workforce Strategy</option>
                          <option value="Corporate Tie-Up & Business Alliances">Corporate Tie-Up & Alliance</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <CaretDown size={14} weight="bold" />
                        </span>
                      </div>
                    </div>

                    {/* Location Hub */}
                    <div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <MapPin size={17} weight="bold" />
                        </span>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
                          <option value="Vadodara / Baroda, Gujarat">Vadodara / Baroda, Gujarat</option>
                          <option value="Surat, Gujarat">Surat, Gujarat</option>
                          <option value="Kalol / Gandhinagar, Gujarat">Kalol / Gandhinagar, Gujarat</option>
                          <option value="Pan-Gujarat">Pan-Gujarat</option>
                          <option value="Pan-India / Other">Pan-India / Other</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C9AA8] pointer-events-none">
                          <CaretDown size={14} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mandate Details / Requirements */}
                  <div>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-[#8C9AA8] pointer-events-none">
                        <ChatCircleText size={17} weight="bold" />
                      </span>
                      <textarea
                        rows={3}
                        placeholder="Brief overview of hiring requirements, seniority level, or corporate partnership scope..."
                        value={formData.mandateDetails}
                        onChange={(e) => setFormData({ ...formData, mandateDetails: e.target.value })}
                        className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 text-xs sm:text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <WarningCircle size={16} weight="fill" className="shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C48B28] hover:bg-[#B37B1E] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <>
                          <SpinnerGap size={18} weight="bold" className="animate-spin" />
                          <span>Submitting Mandate...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Executive Mandate</span>
                          <ArrowRight weight="bold" size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Security Guarantee */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#5A6A80]">
                    <LockKey size={13} weight="bold" className="text-[#C48B28]" />
                    <span>Strict Executive Confidentiality &amp; NDA Protection Assured.</span>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
