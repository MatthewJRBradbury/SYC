/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PontanoSans: ["Pontano Sans"],
        NotoSerif: ["Noto Serif"],
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
