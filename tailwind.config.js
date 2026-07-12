/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic Theme Tokens
        surface: {
          base: 'var(--surface-base)',
          elevated: 'var(--surface-elevated)',
          accent: 'var(--surface-accent)',
          glass: 'var(--surface-glass)',
        },
        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        
        // Legacy/Brand Colors (Kept for accents)
        primary: '#d0bcff',
        secondary: '#fbabff',
        tertiary: '#4fdbc8',
        coral: '#f9735b',
        marigold: '#f5b640',
        ink: '#0b1215',
        night: '#05070d',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        glow: 'var(--shadow-glow)',
        violet: 'var(--shadow-violet)',
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
