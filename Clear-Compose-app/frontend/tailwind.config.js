/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors
        lightscreenbg: '#f0f4f8',
        navblue: '#2c3e50',
        customBlack: '#222222',
        customGray: '#212125'
      },
      fontFamily: {
        // Custom fonts
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        // Custom font weights
        light: 300,
        regular: 400,
        medium: 500,
        heavy: 600,
        bold: 700
      }
    }
  },
  plugins: []
}