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
        primary: '#3F4A49'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
