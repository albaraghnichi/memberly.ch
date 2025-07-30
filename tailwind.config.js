/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e01d1f',
          light: '#e84142',
          dark: '#b31718',
        },
        secondary: {
          DEFAULT: '#101010',
          light: '#2a2a2a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#e01d1f',
          light: '#e84142',
          dark: '#b31718',
        },
        light: {
          DEFAULT: '#ffffff',
          gray: '#f0f0f0',
          dark: '#e0e0e0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(224, 29, 31, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(224, 29, 31, 0.7)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#101010',
            h1: {
              color: '#e01d1f',
            },
            h2: {
              color: '#101010',
            },
            strong: {
              color: '#101010',
            },
            a: {
              color: '#e01d1f',
              '&:hover': {
                color: '#b31718',
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