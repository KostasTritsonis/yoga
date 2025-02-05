/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#0F2E15',
        'secondary': '#4b624b',
        'background': '#DAE2CB',
        'footer': '#C6D6B1',
      },
      fontFamily: {
        tregular: ["Teko", "serif"],
        iregular:["Instrument Sans", "serif"]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

