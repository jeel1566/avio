"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  LinkedinLogo,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger direct mailto link as fallback for immediate inquiry
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - Avio Advision`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-warm-100 relative overflow-hidden border-t border-navy-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-600 mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight mb-4">
            Let's Build What's Next.
          </h2>
          <p className="text-base sm:text-lg text-slateText leading-relaxed">
            We'd love to hear from you. Reach out for corporate leadership advisory, strategic partnership, or confidential hiring mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Metadata & Map Card */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Metadata Rows */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-navy-900/10 flex items-center justify-center text-gold-600 shrink-0 shadow-sm group-hover:border-gold-500/50 transition-colors">
                  <MapPin size={22} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                    Registered Office
                  </h4>
                  <p className="text-sm sm:text-base text-slateText font-medium">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-navy-900/10 flex items-center justify-center text-gold-600 shrink-0 shadow-sm group-hover:border-gold-500/50 transition-colors">
                  <PhoneCall size={22} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                    Direct Line
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-navy-900/10 flex items-center justify-center text-gold-600 shrink-0 shadow-sm group-hover:border-gold-500/50 transition-colors">
                  <EnvelopeSimple size={22} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                    Executive Desk
                  </h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm sm:text-base text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-navy-900/10 flex items-center justify-center text-gold-600 shrink-0 shadow-sm group-hover:border-gold-500/50 transition-colors">
                  <LinkedinLogo size={22} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                    Corporate Network
                  </h4>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-navy-900 font-semibold hover:text-gold-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Ahmedabad Map Preview Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-navy-900/10 h-56 bg-slate-200">
              <iframe
                title="Avio Advision Ahmedabad Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117502.82281855663!2d72.4842107409581!3d23.020497769151525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-md border border-navy-900/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-xs font-bold text-navy-900">Ahmedabad, Gujarat</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-900/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900">
                  Message Dispatched
                </h3>
                <p className="text-sm text-slateText max-w-sm mx-auto">
                  Thank you for reaching out. We have opened your default email client with your message, and our advisory partners will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-gold-600 hover:text-gold-700 underline pt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                  Send a Direct Message
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Name <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-warm-50 border border-navy-900/15 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Email <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-warm-50 border border-navy-900/15 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Message <span className="text-gold-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help your organization?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-warm-50 border border-navy-900/15 text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-base transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.99] cursor-pointer"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight weight="bold" size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
