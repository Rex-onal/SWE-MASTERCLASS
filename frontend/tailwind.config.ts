import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCard: "#FFFFFF",
        brandNavy: "#1A2E44",
        brandAmber: {
          DEFAULT: "#F5C842",
          hover: "#E6B800",
        },
        brandMuted: "#6B7C8D",
        brandGreen: "#2EC97E",
        brandCoral: "#FF7F7F",
        brandLocked: "#D0D8E4",
        track: {
          a: "#3B82F6", // blue
          b: "#F5C842", // amber
          c: "#2EC97E", // green
          d: "#8B5CF6", // purple
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-bg": "linear-gradient(135deg, #A8E6CF 0%, #B2EBD4 100%)",
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(0,0,0,0.07)',
        'brand-hover': '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
export default config;

