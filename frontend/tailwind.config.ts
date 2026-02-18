import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ REQUIRED for class-based dark mode

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}", // optional but recommended
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B3C5D",
          secondary: "#328CC1",
          lightbg: "#F5F7FA",
          darkbg: "#0A192F",
        },
      },
    },
  },

  plugins: [],
};

export default config;
