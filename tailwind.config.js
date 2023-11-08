/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64CCC5",
        color1: "#001524",
        color2: "#213555",
      },
      backgroundImage: {
        bgcustom: "url('../public/img/bg.jpg')"
      },
      fontFamily: {
        display: "Outfit, sans-serif"
      }
    },
  },
  plugins: [],
}