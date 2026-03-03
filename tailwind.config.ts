import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        label: ["var(--font-label)", "sans-serif"],
      },
      colors: {
        canvas: "#060b18",
        surface: {
          1: "#0d1326",
          2: "#111a30",
          3: "#17213a",
          4: "#1e2a46",
        },
        ink: {
          DEFAULT: "#e8edf8",
          secondary: "#8896b3",
          muted: "#445070",
          dim: "#242f4a",
        },
        electric: {
          DEFAULT: "#4f8ef7",
          dim: "rgba(79,142,247,0.12)",
          glow: "rgba(79,142,247,0.06)",
          border: "rgba(79,142,247,0.22)",
        },
        amber: {
          DEFAULT: "#f59e0b",
          dim: "rgba(245,158,11,0.1)",
        },
        emerald: {
          DEFAULT: "#10b981",
          dim: "rgba(16,185,129,0.1)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "electric-sm": "0 0 20px rgba(79,142,247,0.2)",
        "electric-md": "0 0 50px rgba(79,142,247,0.25)",
        "electric-lg": "0 0 100px rgba(79,142,247,0.18)",
        "card": "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.6)",
        "card-hover": "0 0 0 1px rgba(79,142,247,0.25), 0 16px 60px rgba(0,0,0,0.7), 0 0 50px rgba(79,142,247,0.1)",
        "lift": "0 24px 80px -12px rgba(0,0,0,0.9)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
