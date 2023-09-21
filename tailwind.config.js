/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    
    extend: {
      fontFamily: {
        'sans-serif': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#2b3945',
        'very-dark-blue': '#202c37',
        'primary': '#111517',
        'dark-gray': '#858585',
        'very-light-gray': '#fafafa',
      }
    },
  },
  plugins: [],
}

