"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
  light?: boolean;
}

export function Logo({
  className = "",
  size = 44,
  withText = false,
  light = false,
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/assets/logo_transparent.png"
          alt="Avio Advision LLP"
          fill
          priority
          sizes="60px"
          className="object-contain"
        />
      </div>

      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif text-lg font-bold tracking-tight ${
              light ? "text-white" : "text-navy-900"
            }`}
          >
            AVIO ADVISION
          </span>
          <span
            className={`text-[9.5px] uppercase tracking-[0.22em] font-semibold mt-1 ${
              light ? "text-gold-400" : "text-gold-600"
            }`}
          >
            LLP &bull; Strategic Advisory
          </span>
        </div>
      )}
    </div>
  );
}
