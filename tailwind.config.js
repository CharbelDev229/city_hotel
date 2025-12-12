/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hotel-dark': '#0C1B33',
        'hotel-light': '#E0E6ED',
        'hotel-gold': '#D4AF37',
      },
      fontFamily: {
        'primary': ['Back Wild', 'cursive'],
        'secondary': ['Petrov Sans', 'sans-serif'],
        'tertiary': ['Montserrat', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


