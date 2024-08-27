// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/SYC/",
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "index.html",
        faq: "./faq/index.html/",
        book: "./book/index.html/",
        contact: "./contact/index.html/",
        privacy: "./privacy/index.html/",
      },
    },
  },
});
