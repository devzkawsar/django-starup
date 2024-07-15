/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/templates/**/*.{html,js}',
    './apps/**/static/**/*.{html,js}',
    './common/**/frontend/**/*.{html,js}',
    './static/frontend/**/*.{html,js}',
    './static/**/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    container: {
      padding: '0rem',
    },
    extend: {
      colors: {
        'primery': "#131315",
        'secondary': '#979aa1',
        'third': "#f8b195",
      },
    },
    fontFamily: {
      sans: ['Jost'],
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ],
}

