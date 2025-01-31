/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'secondary': 'rgb(85 81 227)',
        'primary': '#2b2d77'
      }
    },
    fontFamily: {
      'hero-font': 'Sriracha',
      'poppins-font': 'Poppins',
    }
  },
  plugins: [],
}

