import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto)", "Noto Sans KR", "system-ui", "sans-serif"],
      },
      colors: {
        /* Company red #C0392B as red-600 base */
        red: {
          50: "#fef2f1",
          100: "#fde3e1",
          200: "#fbc5c0",
          300: "#f79b93",
          400: "#f06558",
          500: "#e04535",
          600: "#C0392B",
          700: "#A93226",
          800: "#8B2820",
          900: "#6D1E18",
          950: "#4A1410",
        },
        charcoal: {
          DEFAULT: "#1A1A24",
          light: "#252535",
          border: "#2E2E42",
        },
        primary: {
          DEFAULT: "#C0392B",
          light: "#FFF0F0",
          dark: "#A93226",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
