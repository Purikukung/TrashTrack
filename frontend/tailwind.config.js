/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2e7d32',
          light: '#388e3c',
        },
        bg: '#f8f8f8',
      },

      fontFamily: {
        sans: ['Inter', 'Kanit', 'ui-sans-serif', 'system-ui'],
      },

      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)',
        cardHover: '0 12px 20px rgba(0,0,0,0.15)',
      },

      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        scaleIn: 'scaleIn 0.3s ease',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}