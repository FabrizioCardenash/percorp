import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#0052cc',
          light: '#0066ff',
          dark: '#003d99',
        },
        corporate: {
          gray: '#f7f7f7',
          'dark-gray': '#2d2d2d',
        },
        // Colores para shadcn/ui
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        heading: ['var(--font-neue-machina)', 'system-ui', 'sans-serif'],
        body: ['var(--font-aptos)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-aptos)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight-heading': '-0.02em',
        'wide-heading': '0.02em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
