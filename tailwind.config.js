/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CEFF',
          300: '#66B5FF',
          400: '#339CFF',
          500: '#0083FF',
          600: '#0069CC',
          700: '#004F99',
          800: '#003466',
          900: '#001A33',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#004F99',
            h1: {
              color: '#003466',
            },
            h2: {
              color: '#004F99',
            },
            h3: {
              color: '#003466',
            },
            strong: {
              color: '#004F99',
            },
            a: {
              color: '#0083FF',
              '&:hover': {
                color: '#0069CC',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};