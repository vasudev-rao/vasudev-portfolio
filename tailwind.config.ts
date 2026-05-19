import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        'deep-blue': '#0b2a45',
        'dark-navy': '#1a1a2e',
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },

      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#d4d4d4',

            maxWidth: '100%',

            h1: {
              color: '#ffffff',
              fontWeight: '800',
            },

            h2: {
              color: '#ffffff',
              fontWeight: '700',
            },

            h3: {
              color: '#ffffff',
              fontWeight: '600',
            },

            strong: {
              color: '#ffffff',
            },

            code: {
              color: '#7dd3fc',
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.35rem',
            },

            'code::before': {
              content: '""',
            },

            'code::after': {
              content: '""',
            },

            pre: {
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              borderRadius: '1rem',
              border: '1px solid #2d2d2d',
              padding: '0',
              overflow: 'hidden',
            },

            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '2rem',
              marginBottom: '2rem',
            },

            thead: {
              backgroundColor: 'rgba(255,255,255,0.04)',
            },

            th: {
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '12px',
            },

            td: {
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '12px',
            },

            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#3b82f6',
            },
          },
        },
      },
    },
  },

  plugins: [typography],
}

export default config