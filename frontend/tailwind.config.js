/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2E4E79",
          DEFAULT: "#2C4669",
          dark: "#1B314D ",
        },
        secondary: {
          light: "#edf2fb",
          DEFAULT: "#FEFBF5",
          dark: "#d7e3fc",
        },
      },
    },
    backgroundImage: {
      "gradient-1": "linear-gradient(to top left, #2C4669, #2E4E79)",
      "gradient-2": "linear-gradient(to top left, #1B314D, #2C4669)",
      "gradient-3": "linear-gradient(to top left, #FEFBF5, #edf2fb)",
      "gradient-4": "linear-gradient(to top left, #d7e3fc, #FEFBF5)",
    },
    fontFamily: {
      MarkGeo: ["MarkGEO", "sans-serif"],
      bog: ["BOG", "sans-serif"],
      bogHeadline: ["BOG Headline", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      xl: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      "2xl": "0px 0px 25px rgba(0, 0, 0, 0.3)",
      "3xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
  },
  plugins: [],
};
