import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      fontSize: {
        //headline font weight bold size is 64px and line height is 72px
        headline: ["64px", { lineHeight: "72px", fontWeight: "bold" }],
        subheadline: ["20px", { lineHeight: "36px" }],
        button: ["16px", { lineHeight: "24px", fontWeight: "bold" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_teal: "#1ABC9C",
        primary_sky_blue: "#3498DB",
        secondary_green: "#27AE60",
        secondary_navy: "#2C3E50",
        neutral_light_grey: "#F4F4F4",
        neutral_dark_grey: "#7F8C8D",
        accent_yellow: "#F1C40F",
        accent_red: "#E74C3C",
      },
    },
  },
  plugins: [],
} satisfies Config;
