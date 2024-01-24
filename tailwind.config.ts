import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      backgroundImage: {
        hero: "url('/static/assets/images/hero.jpg')",
        about: "url('/static/assets/images/about.jpg')",
      },
      colors: {
        white: "#F5f5f5",
        black: "#141414",
        grey: "#252525",
        accent: "#df5f44",
      },
      fontSize: {
        xs: "12px",
        s: "14px",
        m: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "40px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        source: ["var(--font-source-sans-3)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
