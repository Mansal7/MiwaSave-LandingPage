/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8F5F2',
        'background-alt': '#FFF8F3',
        'pink-soft': '#FFB6B9',
        'pink-medium': '#FF8E9E',
        'brown-medium': '#6D4C41',
        'brown-dark': '#3A2E2A',
        gold: '#F9C74F',
        'green-soft': '#A8D5BA',
        'dark-bg': '#1A1210',
        'dark-card': '#2A1E1A',
        'dark-surface': '#3A2A24',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(255, 142, 158, 0.15)',
        'medium': '0 8px 40px rgba(255, 142, 158, 0.2)',
        'glow': '0 0 40px rgba(255, 182, 185, 0.3)',
        'gold': '0 4px 24px rgba(249, 199, 79, 0.3)',
        'dark-soft': '0 4px 24px rgba(0,0,0,0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulse 2.5s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
