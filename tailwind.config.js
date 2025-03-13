/** @type {import('tailwindcss').Config} */
const motion = require("tailwindcss-motion");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [motion], // Add the motion plugin
};
