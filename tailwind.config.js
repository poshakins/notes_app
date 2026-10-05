/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Expo Router screens
    "./src/**/*.{js,jsx,ts,tsx}", // if you use a src/ folder
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        alabaster: "#fafafa",
        governorBay: "#3830a3",
      },
    },
  },
  plugins: [],
};
