"use client";

import React from "react";
import { GUJARAT_SVG_PATH } from "@/data/gujaratMapPath";

export function NetworkMapInteractive() {
  const cities = [
    {
      name: "Kalol",
      x: 533.3,
      y: 222.9,
      textX: 510,
      textY: 228,
      textAnchor: "end" as const,
    },
    {
      name: "Ahmedabad",
      x: 541.7,
      y: 249.6,
      textX: 564,
      textY: 256,
      textAnchor: "start" as const,
    },
    {
      name: "Baroda",
      x: 611.0,
      y: 338.0,
      textX: 633,
      textY: 344,
      textAnchor: "start" as const,
    },
    {
      name: "Surat",
      x: 571.5,
      y: 478.8,
      textX: 594,
      textY: 486,
      textAnchor: "start" as const,
    },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-[#0B1F3A] border border-[#0B1F3A] shadow-xl overflow-hidden p-3 sm:p-6 md:p-8 flex items-center justify-center">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,rgba(196,139,40,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* SVG Map of Gujarat */}
      <div className="relative w-full aspect-[800/650] max-h-[520px] flex items-center justify-center">
        <svg
          viewBox="0 0 800 650"
          className="w-full h-full select-none"
          style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.45))" }}
        >
          <defs>
            {/* Map Fill Gradient */}
            <radialGradient id="gujaratFill" cx="68%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#14345B" />
              <stop offset="60%" stopColor="#0E2542" />
              <stop offset="100%" stopColor="#081A30" />
            </radialGradient>

            {/* Gold Glow Filter */}
            <filter id="cityGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* GUJARAT STATE VECTOR PATH */}
          <path
            d={GUJARAT_SVG_PATH}
            fill="url(#gujaratFill)"
            stroke="#C48B28"
            strokeWidth="1.5"
            strokeOpacity="0.85"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Strategic Connecting Line between Kalol -> Ahmedabad -> Baroda -> Surat */}
          <path
            d="M 533.3 222.9 L 541.7 249.6 Q 572 290 611.0 338.0 Q 598 410 571.5 478.8"
            fill="none"
            stroke="#D4AB53"
            strokeWidth="2"
            strokeDasharray="5 5"
            strokeOpacity="0.8"
          />

          {/* 4 Highlighted Cities: Kalol, Ahmedabad, Baroda, Surat */}
          {cities.map((city) => (
            <g key={city.name}>
              {/* Radar Ping Animation */}
              <circle
                cx={city.x}
                cy={city.y}
                r="18"
                fill="#D4AB53"
                fillOpacity="0.25"
                className="animate-ping"
                style={{ animationDuration: "2.8s" }}
              />

              {/* Outer Golden Ring */}
              <circle
                cx={city.x}
                cy={city.y}
                r={city.name === "Ahmedabad" ? "10" : "8.5"}
                fill="#0B1F3A"
                stroke="#D4AB53"
                strokeWidth="2.5"
                filter="url(#cityGlow)"
              />

              {/* Center Dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={city.name === "Ahmedabad" ? "5" : "4"}
                fill="#F5D78E"
              />

              {/* Text Label Backdrop for high readability */}
              <text
                x={city.textX}
                y={city.textY}
                textAnchor={city.textAnchor}
                fill="#05101E"
                stroke="#05101E"
                strokeWidth="5"
                strokeLinejoin="round"
                fontSize={city.name === "Ahmedabad" ? "20" : "18"}
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="0.03em"
              >
                {city.name}
              </text>

              {/* City Label Text */}
              <text
                x={city.textX}
                y={city.textY}
                textAnchor={city.textAnchor}
                fill="#FFFFFF"
                fontSize={city.name === "Ahmedabad" ? "20" : "18"}
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="0.03em"
              >
                {city.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
