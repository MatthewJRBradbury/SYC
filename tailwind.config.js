/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        CustomSans: ["ui-sans-serif", "system-ui", "sans-serif"],
        CustomSerif: [
          "Noto Serif",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      textColor: {
        primary: "#3F4A49",
      },
      backgroundColor: {
        darkGreen: "#495A58",
      },
      colors: {
        roseAccent: "#D4967D",
        roseAccentHover: "#D5A48E",
        imgBg: "#e9e7e2",
        directSection: "#DCD9D0",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn .25s ease-in",
        fadeOut: "fadeOut .25s ease-out",
      },
      screens: {
        xs: "320px",
        bm: "285px" // burger menu
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
