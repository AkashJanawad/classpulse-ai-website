/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1215',
        night: '#071013',
        paper: '#f7fbfa',
        mist: '#e8f2ef',
        teal: {
          50: '#ecfdf8',
          100: '#d3f8ee',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        coral: '#f9735b',
        marigold: '#f5b640',
        iris: '#6366f1',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(13, 43, 47, 0.14)',
        glow: '0 0 0 1px rgba(20,184,166,.18), 0 22px 70px rgba(20,184,166,.22)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(20,184,166,.20), transparent 34%), radial-gradient(circle at top right, rgba(249,115,91,.16), transparent 30%), radial-gradient(circle at bottom left, rgba(245,182,64,.14), transparent 28%)',
      },
    },
  },
  plugins: [],
};
