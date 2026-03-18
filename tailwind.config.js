/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./hugo_stats.json",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#154a84",
          dark: "#0f3560",
          light: "#1e5fa0",
        },
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(21, 74, 132, 0.08), 0 1px 2px -1px rgba(21, 74, 132, 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
