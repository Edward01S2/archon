const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
    './resources/**/**/*.php',
    './resources/**/*.php',
    './resources/**/**/*.js',
    './resources/**/*.js',
    ],
    options: {
      whitelist: ['italic'],
    }
  },
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      transparent: colors.transparent,
      current: colors.current,
    },
    extend: {
      colors: {
        'c-blue': {
          50 : '#f3faff',
          100 : '#e9f7ff',
          150 : '#e4f4ff',
          200 : '#00a6fb',
          300 : '#3a86ff',
          350: '#1a64d9',
          400 : '#03045e',
        },
        'c-gray' : {
          100: '#cccccc',
          200: '#666666',
          300: '#999999',
          400: '#7a7a7a',
        },
        'c-black' : {
          100: '#0B0D11',
        },
        'c-gold' : {
          100: '#D6A95B'
        },
        'c-purple' : {
          100: '#7209B7',
        },
        'c-pink' : {
          100 : '#FF4181',
        }
      },
      fontFamily: {
        'space' : ['Space Mono', 'monospace'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px'
      },
      fontSize: {
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '10rem',
      },
      maxWidth: {
        '512': '512px',
        '720': '720px',
      },
      spacing: {
        '44' : '11rem',
        '100': '28rem',
        '108' : '32rem',
      },
      opacity: {
        '31': '0.31',
      },
      screens: {
        '2xl' : '1440px',
      },
      boxShadow: {
      },
      transformOrigin: {
        '100' : '100% 0',
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
}
