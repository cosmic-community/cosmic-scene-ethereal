/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0612',
          deeper: '#050208',
          gold: '#d4af37',
          'gold-light': '#f5d76e',
          celestial: '#4a90e2',
          'celestial-light': '#7eb8f0',
          ethereal: '#9d7bd8',
          milk: '#f5f0e8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0612 0%, #1a0e2e 50%, #050208 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f5d76e 100%)',
        'ethereal-gradient': 'linear-gradient(135deg, #4a90e2 0%, #9d7bd8 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}