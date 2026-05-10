import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-subtle': '#111111',
        'bg-card': '#161616',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        border: '#222222',
        brand: '#3b82f6',
        'brand-hover': '#2563eb',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }: any) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.[#888]'),
            '--tw-prose-headings': theme('colors.[#f0f0f0]'),
            '--tw-prose-links': theme('colors.[#5e6ad2]'),
            '--tw-prose-bold': theme('colors.[#f0f0f0]'),
            '--tw-prose-counters': theme('colors.[#5e6ad2]'),
            '--tw-prose-bullets': theme('colors.[#5e6ad2]'),
            '--tw-prose-hr': theme('colors.white/[0.1]'),
            '--tw-prose-quotes': theme('colors.[#888]'),
            '--tw-prose-quote-borders': theme('colors.white/[0.1]'),
            '--tw-prose-code': theme('colors.[#5e6ad2]'),
            '--tw-prose-pre-code': theme('colors.[#888]'),
            '--tw-prose-pre-bg': theme('colors.white/[0.03]'),
            '--tw-prose-th-borders': theme('colors.white/[0.1]'),
            '--tw-prose-td-borders': theme('colors.white/[0.1]'),
            'color': 'var(--tw-prose-body)',
            'strong > code': 'var(--tw-prose-code)',
            'li > code': 'var(--tw-prose-code)',
            'h1 > code': 'var(--tw-prose-code)',
            'h2 > code': 'var(--tw-prose-code)',
            'h3 > code': 'var(--tw-prose-code)',
            'h4 > code': 'var(--tw-prose-code)',
            'h5 > code': 'var(--tw-prose-code)',
            'h6 > code': 'var(--tw-prose-code)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
