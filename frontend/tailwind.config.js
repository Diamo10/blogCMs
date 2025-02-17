/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        macondo: ["Macondo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
