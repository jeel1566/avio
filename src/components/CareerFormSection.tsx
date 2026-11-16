"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  UploadSimple,
  CheckCircle,
  WarningCircle,
  FileText,
  Trash,
  ArrowRight,
  SpinnerGap,
  ShieldCheck,
  Briefcase,
  Scales,
  Handshake,
  Sparkle,
  LockKey,
} from "@phosphor-icons/react";

interface FormState {
  fullName: string;
  email: string;
  mobile: string;
  pinCode: string;
  location: string;
}

export function CareerFormSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    mobile: "",
    pinCode: "",
    location: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!form.fullName.trim()) errors.fullName = "Full name is required";
    if (!form.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!form.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (form.mobile.replace(/\D/g, "").length < 10) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!form.pinCode.trim()) errors.pinCode = "PIN Code is required";
    if (!form.location.trim()) errors.location = "Location / Area is required";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5MB limit. Please upload a smaller file.");
      setSelectedFile(null);
      return;
    }

    // Validate format
    const allowedExtensions = ["pdf", "doc", "docx"];
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !allowedExtensions.includes(ext)) {
      setFileError("Unsupported format. Please upload PDF, DOC, or DOCX.");
      setSelectedFile(null);
      return;
    }

    setFileError(null);
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      let resumeBase64: string | null = null;
      let resumeFileName: string | null = null;
      let resumeMimeType: string | null = null;

      if (selectedFile) {
        resumeFileName = selectedFile.name;
        resumeMimeType = selectedFile.type;
        const buffer = await selectedFile.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        resumeBase64 = btoa(binary);
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          resumeBase64,
          resumeFileName,
          resumeMimeType,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message || "Thank you! Your profile has been received. Our advisory team will review your credentials."
        );
        // Trigger celebratory confetti
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#D4AB53", "#0B1F3A", "#C48B28"],
        });

        // Reset form fields
        setForm({
          fullName: "",
          email: "",
          mobile: "",
          pinCode: "",
          location: "",
        });
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Failed to submit application. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Network error occurred while submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#0B1F3A]/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D4AB53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#0B1F3A]">
              CAREER OPPORTUNITIES
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-[#0B1F3A]/40 inline-block" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-[1.12] tracking-tight mb-4 sm:mb-5">
            Find Your Next <br />
            <span className="text-[#C48B28]">Executive Opportunity.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
            Submit your credentials to our confidential talent advisory. When high-caliber leadership and specialist roles align with your background across India, our partners will reach out directly.
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Executive Advisory Showcase (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Application Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-[#0B1F3A]/8"
          >
            {/* Status Feedback Alerts */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5 shadow-sm"
                >
                  <CheckCircle size={24} weight="fill" className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Application Successfully Submitted!</h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3.5 shadow-sm"
                >
                  <WarningCircle size={24} weight="fill" className="text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Submission Error</h4>
                    <p className="text-xs text-rose-800 mt-1 leading-relaxed">{statusMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    Full Name <span className="text-[#C48B28]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all ${
                      fieldErrors.fullName ? "border-rose-400 bg-rose-50/20" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]/30"
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    Email Address <span className="text-[#C48B28]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all ${
                      fieldErrors.email ? "border-rose-400 bg-rose-50/20" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]/30"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Mobile Number & PIN Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    Mobile Number <span className="text-[#C48B28]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all ${
                      fieldErrors.mobile ? "border-rose-400 bg-rose-50/20" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]/30"
                    }`}
                  />
                  {fieldErrors.mobile && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.mobile}</p>
                  )}
                </div>

                {/* PIN Code */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    PIN Code <span className="text-[#C48B28]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 380015"
                    value={form.pinCode}
                    onChange={(e) => setForm({ ...form, pinCode: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all ${
                      fieldErrors.pinCode ? "border-rose-400 bg-rose-50/20" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]/30"
                    }`}
                  />
                  {fieldErrors.pinCode && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.pinCode}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Location / Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                  Location / Area <span className="text-[#C48B28]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bodakdev / SG Highway, Ahmedabad"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border text-sm text-[#0B1F3A] placeholder-[#8C9AA8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C48B28]/30 transition-all ${
                    fieldErrors.location ? "border-rose-400 bg-rose-50/20" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]/30"
                  }`}
                />
                {fieldErrors.location && (
                  <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.location}</p>
                )}
              </div>

              {/* Row 4: Resume / CV Upload Dropzone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                  Resume / Curriculum Vitae (PDF, DOC, DOCX up to 5MB)
                </label>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-file-input"
                />

                {!selectedFile ? (
                  <label
                    htmlFor="resume-file-input"
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#0B1F3A]/20 rounded-2xl bg-[#FAF8F5] hover:bg-white hover:border-[#C48B28] transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F3EAD8] flex items-center justify-center text-[#C48B28] group-hover:scale-110 transition-transform mb-3 shadow-xs">
                      <UploadSimple size={24} weight="bold" />
                    </div>
                    <p className="text-sm font-semibold text-[#0B1F3A] text-center">
                      Choose file or drag & drop here
                    </p>
                    <p className="text-xs text-[#5A6A80] mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF8F5] border border-[#0B1F3A]/15 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F3EAD8] flex items-center justify-center text-[#C48B28]">
                        <FileText size={22} weight="bold" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0B1F3A] truncate max-w-[200px] sm:max-w-xs">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-[#5A6A80]">
                          {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <Trash size={18} weight="bold" />
                    </button>
                  </div>
                )}

                {fileError && (
                  <p className="text-rose-600 text-xs mt-1.5 font-medium">{fileError}</p>
                )}
              </div>

              {/* Confidentiality Assurance Notice */}
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F6F1] border border-[#0B1F3A]/8 text-xs text-[#5A6A80]">
                <LockKey size={18} weight="bold" className="text-[#C48B28] shrink-0" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your profile is never shared with any employer without your prior discussion and consent.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C48B28] hover:bg-[#B37B1E] text-white font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
                >
                  {isSubmitting ? (
                    <>
                      <SpinnerGap size={20} className="animate-spin" />
                      <span>Transmitting Profile to Advisory...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Career Profile</span>
                      <ArrowRight weight="bold" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

          {/* Right Column: Executive Advisory Pillars Card (Deep Navy) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Dark Navy Pillar Card */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-[#0B1F3A]">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16385A] border border-[#D4AB53]/30 text-[#D4AB53] text-[11px] font-bold uppercase tracking-wider mb-6">
                <Sparkle size={14} weight="fill" />
                <span>Executive Advisory</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                Why Senior Leaders <br />
                <span className="text-[#D4AB53]">Trust Avio Advision.</span>
              </h3>

              <p className="text-xs text-white/70 leading-relaxed mb-8">
                Executive moves define decades of legacy. We act as confidential career partners to C-suite, VPs, and specialized technical leaders across sectors.
              </p>

              {/* 4 Value Points */}
              <div className="space-y-5 border-t border-white/10 pt-6">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] shrink-0 mt-0.5">
                    <ShieldCheck size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">
                      Confidential Representation
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Your identity and current standing remain strictly protected throughout all initial board explorations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] shrink-0 mt-0.5">
                    <Briefcase size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">
                      Unadvertised C-Suite Mandates
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Access exclusive board, MD, and senior director searches that never appear on public job boards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] shrink-0 mt-0.5">
                    <Scales size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">
                      Compensation & Board Advisory
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Industry benchmark analysis, equity structures, and strategic terms negotiated on your behalf.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#16385A] border border-[#D4AB53]/30 flex items-center justify-center text-[#D4AB53] shrink-0 mt-0.5">
                    <Handshake size={20} weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">
                      Long-Term Relationship
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      We support your growth over the arc of your entire leadership career, not just a single transition.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Quote Accent Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0B1F3A]/8 flex items-start gap-4">
              <span className="font-serif text-4xl text-[#C48B28] leading-none select-none">
                “
              </span>
              <div>
                <p className="font-serif italic text-sm text-[#0B1F3A] leading-relaxed mb-2">
                  Exceptional organizations are built by exceptional people. We ensure top talent finds the platform it truly deserves.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#5A6A80]">
                  Avio Advision LLP &bull; Executive Search
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
