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
  Sparkle,
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D4AB53", "#0B1F3A", "#E2BF6F"],
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
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage("Network error occurred while submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 md:py-32 bg-warm-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Header */}
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
                Career Opportunities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight mb-4">
                Find Your Next <br />
                <span className="text-navy-900">Opportunity.</span>
              </h2>
              <p className="text-base text-slateText leading-relaxed">
                Submit your profile and our executive search and recruitment practice will connect you with confidential, high-caliber career opportunities.
              </p>
            </div>

            {/* Submission Status Alerts */}
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Full Name <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
                      fieldErrors.fullName ? "border-rose-400 bg-rose-50/20" : "border-navy-900/15"
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Email Address <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
                      fieldErrors.email ? "border-rose-400 bg-rose-50/20" : "border-navy-900/15"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Mobile Number <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
                      fieldErrors.mobile ? "border-rose-400 bg-rose-50/20" : "border-navy-900/15"
                    }`}
                  />
                  {fieldErrors.mobile && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.mobile}</p>
                  )}
                </div>

                {/* PIN Code */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    PIN Code <span className="text-gold-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 380015"
                    value={form.pinCode}
                    onChange={(e) => setForm({ ...form, pinCode: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
                      fieldErrors.pinCode ? "border-rose-400 bg-rose-50/20" : "border-navy-900/15"
                    }`}
                  />
                  {fieldErrors.pinCode && (
                    <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.pinCode}</p>
                  )}
                </div>
              </div>

              {/* Location/Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Location / Area <span className="text-gold-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bodakdev / SG Highway, Ahmedabad"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all ${
                    fieldErrors.location ? "border-rose-400 bg-rose-50/20" : "border-navy-900/15"
                  }`}
                />
                {fieldErrors.location && (
                  <p className="text-rose-600 text-xs mt-1.5 font-medium">{fieldErrors.location}</p>
                )}
              </div>

              {/* Resume Upload Box */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
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
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-navy-900/20 rounded-2xl bg-white/70 hover:bg-white hover:border-gold-500/70 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 group-hover:scale-110 transition-transform mb-3">
                      <UploadSimple size={24} weight="bold" />
                    </div>
                    <p className="text-sm font-semibold text-navy-900 text-center">
                      Choose file or drag and drop
                    </p>
                    <p className="text-xs text-slateText/70 mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-navy-900/15 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-900/5 flex items-center justify-center text-navy-900">
                        <FileText size={22} weight="duotone" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy-900 truncate max-w-[220px] sm:max-w-xs">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-slateText/70">
                          {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
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

              {/* Submit Trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-base transition-all duration-200 shadow-md hover:shadow-gold active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <SpinnerGap size={20} className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight weight="bold" size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Editorial Support Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-900/10 bg-navy-950">
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                  alt="Candidate Support - Avio Advision"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                
                {/* Floating Corner Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-navy-900/10 max-w-[200px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-navy-900/60">
                      Advisory
                    </span>
                    <Sparkle size={16} weight="fill" className="text-gold-500" />
                  </div>
                  <h4 className="font-display text-base font-bold text-navy-900 leading-snug">
                    Your Career <br />
                    <span className="text-navy-900">Our Support.</span>
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
