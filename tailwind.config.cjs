/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Fredoka' : ['Fredoka-Medium', 'system-ui']
      },
      colors: {
        'brand' : '#182C6A',
        'hover' : '#2f5be2',
        'light' : '#e7e9f0',
        'dropdown' : '#f9f4f1',
        'typo' : '#1D2120'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
