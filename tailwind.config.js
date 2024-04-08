/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        // Add more fonts if needed
      },
      colors: {
        'airbnb-accent': "#D03660",
        'airbnb-pink': '#FF585D',
        'airbnb-dark': '#484848',
        'airbnb-light': '#767676',
        'airbnb-gray': '#CCCCCC',
        'airbnb-hover': '#DDDDDD',
      },
    },
  },
  plugins: [],
}

