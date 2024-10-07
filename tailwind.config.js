/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      },
    },
    extend: {
      colors: {
        blackColor: "#1f1f1f",
        redColor: "#fc3314",
        fleshColor: "#ffd4d0",
      },
    },
    fontFamily: {
      inter:["Inter", "sans-serif"],
      montserrat:["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}

