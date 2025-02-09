import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#E5F1FF",
        customYellow: "#F1BC3E",
        customOrange: "#FF7300",
        customNavy: "#004060",
        customDarkNavy: "#0D101C",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
