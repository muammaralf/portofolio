/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#00ffe8",
        darkbg: "#091e26",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
