/** @type {import('tailwindcss').Config} */

// ─── Extracted from Figma file Q28lsuD3MwA9k7UIAmHPoI · Foundations page ───
// Brand A = EB Garamond / monochrome palette (light)
// Brand B = Poppins / violet palette (light-purple)
// Switch brands by setting data-brand="a" | data-brand="b" on <html>

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────────────────────
      // All semantic slots point at CSS variables so a single data-brand
      // attribute on <html> swaps the entire palette at runtime.
      colors: {
        brand: {
          primary:       'var(--color-brand-primary)',
          'primary-hover':   'var(--color-brand-primary-hover)',
          'primary-subtle':  'var(--color-brand-primary-subtle)',
          accent:        'var(--color-brand-accent)',
        },
        text: {
          DEFAULT:   'var(--color-text-default)',
          secondary: 'var(--color-text-secondary)',
          disabled:  'var(--color-text-disabled)',
          inverse:   'var(--color-text-inverse)',
          'on-brand':'var(--color-text-on-brand)',
        },
        bg: {
          DEFAULT: 'var(--color-bg-default)',
          subtle:  'var(--color-bg-subtle)',
          muted:   'var(--color-bg-muted)',
          brand:   'var(--color-bg-brand)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          strong:  'var(--color-border-strong)',
          brand:   'var(--color-border-brand)',
        },
        // Semantic — identical across brands
        success: {
          DEFAULT: '#16A34A',
          bg:      '#DCFCE7',
        },
        error: {
          DEFAULT: '#DC2626',
          bg:      '#FEE2E2',
        },
        warning: {
          DEFAULT: '#F59E0B',
          bg:      '#FEF3C7',
        },
        info: {
          DEFAULT: '#0891B2',
          bg:      '#CFFAFE',
        },

        // ── Raw brand palettes (for one-off overrides / non-semantic uses) ───
        'brand-a': {
          primary:        '#111111',
          'primary-hover':'#444444',
          'primary-subtle':'#F5F5F5',
          accent:         '#767676',
          'text-default': '#111111',
          'text-secondary':'#767676',
          'text-disabled':'#E0E0E0',
          'text-inverse': '#FFFFFF',
          'bg-default':   '#FFFFFF',
          'bg-subtle':    '#F5F5F5',
          'bg-muted':     '#EEEEEE',
          'border-default':'#E0E0E0',
          'border-strong':'#767676',
          'border-brand': '#111111',
        },
        'brand-b': {
          primary:        '#7C3AED',
          'primary-hover':'#6D28D9',
          'primary-subtle':'#EDE9FE',
          accent:         '#A78BFA',
          'text-default': '#1E1B4B',
          'text-secondary':'#6D28D9',
          'text-disabled':'#C4B5FD',
          'text-inverse': '#FFFFFF',
          'bg-default':   '#FFFFFF',
          'bg-subtle':    '#F5F3FF',
          'bg-muted':     '#EDE9FE',
          'border-default':'#DDD6FE',
          'border-strong':'#8B5CF6',
          'border-brand': '#7C3AED',
        },
      },

      // ── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        // Brand A headings & body
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
        // Brand B headings & body
        poppins:  ['"Poppins"', 'system-ui', 'sans-serif'],
        // Semantic alias — resolves via CSS variable
        heading:  'var(--font-heading)',
        body:     'var(--font-body)',
      },

      fontSize: {
        // Figma scale (size / line-height pairs)
        'display': ['56px', { lineHeight: '64px' }],
        'h1':      ['40px', { lineHeight: '48px' }],
        'h2':      ['32px', { lineHeight: '40px' }],
        'h3':      ['24px', { lineHeight: '32px' }],
        'h4':      ['20px', { lineHeight: '28px' }],
        'h5':      ['16px', { lineHeight: '24px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body':    ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'caption': ['12px', { lineHeight: '16px' }],
        'btn':     ['14px', { lineHeight: '20px' }],
        'btn-lg':  ['16px', { lineHeight: '24px' }],
      },

      fontWeight: {
        regular:   '400',
        semibold:  '600',
        bold:      '700',
      },

      // ── Spacing ─────────────────────────────────────────────────────────────
      // Extends (not replaces) Tailwind's default spacing.
      // Named after Figma's space/* tokens.
      spacing: {
        'space-0': '0px',
        'space-1': '4px',
        'space-2': '8px',
        'space-3': '16px',
        'space-4': '24px',
        'space-5': '32px',
        'space-6': '48px',
        'space-7': '64px',
        'space-8': '96px',
      },

      // ── Border Radius ───────────────────────────────────────────────────────
      // Both brands have the same token names but different values;
      // resolved via CSS variable so data-brand switches them.
      borderRadius: {
        'radius-sm':   'var(--radius-sm)',
        'radius-md':   'var(--radius-md)',
        'radius-lg':   'var(--radius-lg)',
        'radius-xl':   'var(--radius-xl)',
        'radius-2xl':  'var(--radius-2xl)',
        'radius-full': '9999px',

        // Raw values for explicit brand-locked usage
        'a-sm': '2px',  'b-sm': '8px',
        'a-md': '4px',  'b-md': '12px',
        'a-lg': '8px',  'b-lg': '16px',
        'a-xl': '12px', 'b-xl': '24px',
        'a-2xl':'16px', 'b-2xl':'32px',
      },

      // ── Box Shadow (Elevation) ───────────────────────────────────────────────
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12)',
        'elevation-2': '0 2px 8px rgba(0,0,0,0.16)',
        'elevation-3': '0 4px 16px rgba(0,0,0,0.20)',
        'elevation-4': '0 8px 32px rgba(0,0,0,0.24)',
      },

      // ── Screens / Grid breakpoints ───────────────────────────────────────────
      screens: {
        tablet:  '768px',
        desktop: '1200px',
      },

      maxWidth: {
        grid: '1440px',
      },
    },
  },

  plugins: [],
};
