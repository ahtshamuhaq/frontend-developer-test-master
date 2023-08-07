/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-": "#FFFFFF",
        "primary-gray": "#131417",
        unselected: "#666666",
        green: "#0AC18E",
        "teritiary-gray": "#808287",
      },
      backgroundColor: {
        black: "#000000",
        gray: "#282A31",
        "secondary-gray": "#18191D",
        "primary-gray": "#131417",
      },
    },
  },
  plugins: [],
};
