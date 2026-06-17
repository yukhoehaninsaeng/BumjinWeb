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
        /* Company red #E8001D as red-600 base */
        red: {
          50: "#fff0f0",
          100: "#ffe1e1",
          200: "#ffbdbd",
          300: "#ff9090",
          400: "#ff5050",
          500: "#f02525",
          600: "#E8001D",
          700: "#c50019",
          800: "#a00015",
          900: "#7a000f",
          950: "#5a000b",
        },
        charcoal: {
          DEFAULT: "#1A1A24",
          light: "#252535",
          border: "#2E2E42",
        },
        primary: {
          DEFAULT: "#E8001D",
          light: "#FFF0F0",
          dark: "#c50019",
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
