/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1215',
        night: '#05070d',
        paper: '#f7fbfa',
        mist: '#e8f2ef',
        primary: '#d0bcff',
        secondary: '#fbabff',
        tertiary: '#4fdbc8',
        surface: '#111417',
        'surface-high': '#1d2023',
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
        glow: '0 0 0 1px rgba(208,188,255,.22), 0 24px 80px rgba(139,92,246,.24)',
        violet: '0 0 55px rgba(208,188,255,.28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(20,184,166,.20), transparent 34%), radial-gradient(circle at top right, rgba(249,115,91,.16), transparent 30%), radial-gradient(circle at bottom left, rgba(245,182,64,.14), transparent 28%)',
        aurora:
          'radial-gradient(circle at 20% 15%, rgba(208,188,255,.20), transparent 30%), radial-gradient(circle at 85% 10%, rgba(251,171,255,.18), transparent 28%), radial-gradient(circle at 70% 70%, rgba(79,219,200,.12), transparent 34%), linear-gradient(135deg, #05070d 0%, #0b1020 48%, #05070d 100%)',
      },
    },
  },
  plugins: [],
};
