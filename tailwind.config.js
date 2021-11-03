const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'remember-blue-primary': '#7986cb',
        'remember-blue-dark': '#49599a',
        'remember-blue-light': '#aab6fe',
        gray: {
          100: '#f1f5f9'
        }
        
      }
    },
    fontFamily:{
      Nunito:['Nunito, sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
