/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "./App.{js,jsx,ts,tsx}", // Include the App.js file in the root
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        cardBg: "#1E1E1E",
        chartDark: "rgba(235, 235, 235, 0.05)",
        textPrimary: "#FFFFFF",
        textSecondary: "#A3A3A3",
        accent: "#3B82F6",
      },
      fontSize: {
        32: ["32px", "32px"],
      },
    },
  },
  plugins: [],
};
