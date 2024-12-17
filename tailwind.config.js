/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PontanoSans: ['Pontano Sans', 'Arial', 'sans-serif'],
        NotoSerif: ['Noto Serif', 'Georgia', 'serif'],
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
        directSection: "#DCD9D0"
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
