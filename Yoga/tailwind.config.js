/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#0F2E15',
        'secondary': '#4b624b',
      }
    },
    fontFamily: {
        plight: ["Teko-Light", "sans-serif"],
        pregular: ["Teko-Regular", "sans-serif"],
        pmedium: ["Teko-Medium", "sans-serif"],
        psemibold: ["Teko-SemiBold", "sans-serif"],
        pbold: ["Teko-Bold", "sans-serif"],
    },
  },
  plugins: [],
}

