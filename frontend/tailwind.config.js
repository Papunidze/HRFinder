/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#BEE9E8",
          DEFAULT: "#62B6CB",
          dark: "#1B4965",
        },
        secondary: {
          light: "#edf2fb",
          DEFAULT: "#e2eafc",
          dark: "#d7e3fc",
        },
        accent: {
          light: "#3e5c76",
          DEFAULT: "#1d2d44",
          dark: "#0d1321",
        },
      },
    },
    fontFamily: {
      MarkGeo: ["MarkGEO", "sans-serif"],
      bog: ["BOG", "sans-serif"],
      bogHeadline: ["BOG Headline", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
