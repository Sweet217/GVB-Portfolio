/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',
    './src/styles/**/*.{css,scss,sass}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        Eczar: ["Eczar", "serif"],
        work_sans: ["Work Sans", "sans-serif"],
        funky: ['"Super Funky Regular"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}