/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#0F2E15',
        'secondary': '#4b624b',
      },
      fontFamily: {
        tregular: ["Teko", "serif"],
        gregular:[ "Geo", "serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

