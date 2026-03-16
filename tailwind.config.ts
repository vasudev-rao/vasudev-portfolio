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
        display: ["'Inter'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
        label:   ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        canvas:  "#000412",
        void:    "#0E1320",
        surface: {
          1: "#000824",
          2: "#000D30",
          3: "#001240",
          4: "#001840",
        },
        ink: {
          DEFAULT:   "#F0F4FF",
          secondary: "#8A9BC0",
          muted:     "#4A5880",
          dim:       "#2A3558",
        },
        electric: {
          DEFAULT: "#00F2FF",
          dim:     "rgba(0,212,170,0.12)",
          glow:    "rgba(0,212,170,0.06)",
          border:  "rgba(0,212,170,0.2)",
        },
        cyan: {
          DEFAULT: "#00F2FF",
          bright:  "#00FFCC",
        },
        amber: {
          DEFAULT: "#F5A623",
          dim:     "rgba(245,166,35,0.12)",
        },
        iris: {
          DEFAULT: "#6C63FF",
          dim:     "rgba(108,99,255,0.12)",
        },
        emerald: {
          DEFAULT: "#10b981",
          dim:     "rgba(16,185,129,0.1)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "cyan-sm":    "0 0 20px rgba(0,212,170,0.2)",
        "cyan-md":    "0 0 50px rgba(0,212,170,0.25)",
        "cyan-lg":    "0 0 100px rgba(0,212,170,0.15)",
        "electric-sm":"0 0 20px rgba(0,212,170,0.2)",
        "electric-md":"0 0 50px rgba(0,212,170,0.25)",
        "electric-lg":"0 0 100px rgba(0,212,170,0.15)",
        "card":       "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.6)",
        "card-hover": "0 0 0 1px rgba(0,212,170,0.18), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(0,212,170,0.06)",
        "lift":       "0 24px 80px -12px rgba(0,0,0,0.9)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-right":"slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan":       "scan 10s linear infinite",
        "float":      "float 6s ease-in-out infinite",
        "marquee":    "marquee 40s linear infinite",
        "cyan-ping":  "cyanPing 2s ease-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.3" },
          "50%":     { opacity: "0.8" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        cyanPing: {
          "0%":   { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
