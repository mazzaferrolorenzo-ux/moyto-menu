/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette MOYTO: nero profondo, oro caldo, crema, rame
        moyto: {
          black: '#0a0705',
          ink: '#15100c',
          coal: '#1f1813',
          gold: '#d4a24c',
          goldLight: '#e8c170',
          goldDark: '#a87a2c',
          copper: '#b86b3a',
          cream: '#f5ead4',
          creamSoft: '#e8dcc0',
          burgundy: '#5a1414',
          red: '#8a1a1a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'steam': 'steam 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-30px) scale(1.5)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 162, 76, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 162, 76, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at center, rgba(212, 162, 76, 0.15) 0%, transparent 60%)',
        'gradient-luxury': 'linear-gradient(135deg, #0a0705 0%, #1f1813 50%, #0a0705 100%)',
      },
    },
  },
  plugins: [],
}
