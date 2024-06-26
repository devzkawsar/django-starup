/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.html',
    './node_modules/flowbite/**/*.js',
    './static/frontend/js/*.js',
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  theme: {
    extend: {
    },
    letterSpacing: {
      tighter: '-.5em',
      tight: '-.25em',
      normal: '0',
      wide: '.25em',
      wider: '.5em',
      widest: '.75em',
    },
    fontFamily: {
      'sans': ['Helvetica'],
    }
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
  ],
}

