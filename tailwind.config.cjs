/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Fredoka' : ['Fredoka-Medium', 'system-ui']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
