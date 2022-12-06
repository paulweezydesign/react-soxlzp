/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,css}'],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
