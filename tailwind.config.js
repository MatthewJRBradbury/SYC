/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PontanoSans: ["Pontano Sans"],
        NotoSerif: ["Noto Serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
