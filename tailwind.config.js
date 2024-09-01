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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
