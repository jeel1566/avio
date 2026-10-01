import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061120",
          900: "#0B1F3A", // Navy Primary
          850: "#0D2545",
          800: "#16385A", // Deep Blue
          700: "#1E4B7A",
        },
        gold: {
          300: "#EED798",
          400: "#DFB86C",
          500: "#C48B28", // Gold Accent from reference
          600: "#B88022",
          700: "#9C6B19",
        },
        warm: {
          50: "#FCFBF8",
          100: "#F8F6F1", // Warm White / Linen Background
          200: "#F1EBE0",
          300: "#E6DFCE",
          800: "#322E2B",
          900: "#1C1917",
        },
        slateText: "#4A5568",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        premium: "0 20px 40px -15px rgba(11, 31, 58, 0.08)",
        gold: "0 10px 25px -5px rgba(196, 139, 40, 0.3)",
        glass: "0 8px 32px 0 rgba(11, 31, 58, 0.06)",
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
