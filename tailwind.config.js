/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/**/*.html',
    './node_modules/daisyui/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '500' : "#22c55e"
        },
        gray: {
          '400' : "#9ca3af",
          '500': "#6b7280"
        }
      },
      borderColor: {
        gray: {
          '300': "#d1d5db",
          '400' : "#9ca3af",
          '500': "#6b7280"
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': {
        DEFAULT: '#4ade80',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

