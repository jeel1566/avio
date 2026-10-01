"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
  light?: boolean;
}

export function Logo({
  className = "",
  size = 40,
  withText = false,
  light = false,
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient
            id="navyGradLeft"
            x1="10"
            y1="85"
            x2="50"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#08182D" />
            <stop offset="60%" stopColor="#0F3B77" />
            <stop offset="100%" stopColor="#1B56AA" />
          </linearGradient>

          <linearGradient
            id="navyGradRight"
            x1="90"
            y1="85"
            x2="50"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#08182D" />
            <stop offset="60%" stopColor="#0F3B77" />
            <stop offset="100%" stopColor="#1B56AA" />
          </linearGradient>

          <linearGradient
            id="goldGrad"
            x1="30"
            y1="50"
            x2="70"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F9DF92" />
            <stop offset="45%" stopColor="#D4AB53" />
            <stop offset="100%" stopColor="#A67B22" />
          </linearGradient>

          <linearGradient
            id="goldCircleGrad"
            x1="40"
            y1="45"
            x2="60"
            y2="65"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFF0B8" />
            <stop offset="60%" stopColor="#D4AB53" />
            <stop offset="100%" stopColor="#9C7320" />
          </linearGradient>

          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Upper Left Blue Chevron Bar */}
        <polygon
          points="46,14 50,7 28,45 20,45"
          fill="url(#navyGradLeft)"
        />

        {/* Upper Right Blue Chevron Bar */}
        <polygon
          points="54,14 50,7 72,45 80,45"
          fill="url(#navyGradRight)"
        />

        {/* Lower Left Blue Base Bar */}
        <polygon
          points="25,51 34,51 8,92 0,92"
          fill="url(#navyGradLeft)"
        />

        {/* Lower Right Blue Base Bar */}
        <polygon
          points="75,51 66,51 92,92 100,92"
          fill="url(#navyGradRight)"
        />

        {/* Center Human Figure - Gold Head */}
        <circle
          cx="50"
          cy="56"
          r="9.5"
          fill="url(#goldCircleGrad)"
        />

        {/* Center Human Figure - Inverted Gold Chevron / Arms & Torso */}
        <polygon
          points="29,64 50,89 71,64 63,59 50,75 37,59"
          fill="url(#goldGrad)"
        />
      </svg>

      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              light ? "text-white" : "text-navy-900"
            }`}
          >
            AVIO ADVISION
          </span>
          <span
            className={`text-[9.5px] uppercase tracking-[0.22em] font-semibold mt-0.5 ${
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
