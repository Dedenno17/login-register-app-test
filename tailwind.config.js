/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryRed: '#E30607',
        primaryGrey: '#534F4F',
        primaryBlack: '#0A0A0A',
        darkGrey: '#1D1A1A',
        lightGrey: '#787777',
        lighterGrey: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
