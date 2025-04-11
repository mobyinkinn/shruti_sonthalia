// /** @type {import('tailwindcss').Config} */
// const motion = require("tailwindcss-motion");

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [motion], // Add the motion plugin
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinLoop: "spin360 2s linear infinite",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #FFD45C 0%, #A97C50 52.5%, #FFD45C 100%)",
        "custom-gradient":
          "linear-gradient(to bottom, rgba(52, 52, 52, 0.64) 16%, rgba(36, 36, 36, 0.48) 32%, rgba(15, 15 , 15, 0.32) 48%, rgba(8, 8, 8, 0.16) 64%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.1) 100%)",
      },
    },
  },
  plugins: [],
};
