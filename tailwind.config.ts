import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        input: {
          DEFAULT: 'var(--input-700)',
          50: 'var(--input-50)',
          100: 'var(--input-100)',
          200: 'var(--input-200)',
          300: 'var(--input-300)',
          400: 'var(--input-400)',
          500: 'var(--input-500)',
          600: 'var(--input-600)',
          700: 'var(--input-700)',
          800: 'var(--input-800)',
          900: 'var(--input-900)',
          950: 'var(--input-950)',
        },
        ring: {
          DEFAULT: 'var(--ring-400)',
          50: 'var(--ring-50)',
          100: 'var(--ring-100)',
          200: 'var(--ring-200)',
          300: 'var(--ring-300)',
          400: 'var(--ring-400)',
          500: 'var(--ring-500)',
          600: 'var(--ring-600)',
          700: 'var(--ring-700)',
          800: 'var(--ring-800)',
          900: 'var(--ring-900)',
          950: 'var(--ring-950)',
        },
        background: {
          DEFAULT: 'var(--background-100)',
          50: 'var(--background-50)',
          100: 'var(--background-100)',
          200: 'var(--background-200)',
          300: 'var(--background-300)',
          400: 'var(--background-400)',
          500: 'var(--background-500)',
          600: 'var(--background-600)',
          700: 'var(--background-700)',
          800: 'var(--background-800)',
          900: 'var(--background-900)',
          950: 'var(--background-950)',
        },
        foreground: {
          DEFAULT: 'var(--foreground-700)',
          50: 'var(--foreground-50)',
          100: 'var(--foreground-100)',
          200: 'var(--foreground-200)',
          300: 'var(--foreground-300)',
          400: 'var(--foreground-400)',
          500: 'var(--foreground-500)',
          600: 'var(--foreground-600)',
          700: 'var(--foreground-700)',
          800: 'var(--foreground-800)',
          900: 'var(--foreground-900)',
          950: 'var(--foreground-950)',
        },
        primary: {
          DEFAULT: 'var(--primary-700)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
          foreground: {
            DEFAULT: 'var(--primary-foreground-50)',
            50: 'var(--primary-foreground-50)',
            100: 'var(--primary-foreground-100)',
            200: 'var(--primary-foreground-200)',
            300: 'var(--primary-foreground-300)',
            400: 'var(--primary-foreground-400)',
            500: 'var(--primary-foreground-500)',
            600: 'var(--primary-foreground-600)',
            700: 'var(--primary-foreground-700)',
            800: 'var(--primary-foreground-800)',
            900: 'var(--primary-foreground-900)',
            950: 'var(--primary-foreground-950)',
          },
        },
        secondary: {
          DEFAULT: 'var(--secondary-700)',
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
          950: 'var(--secondary-950)',
          foreground: {
            DEFAULT: 'var(--secondary-foreground-50)',
            50: 'var(--secondary-foreground-50)',
            100: 'var(--secondary-foreground-100)',
            200: 'var(--secondary-foreground-200)',
            300: 'var(--secondary-foreground-300)',
            400: 'var(--secondary-foreground-400)',
            500: 'var(--secondary-foreground-500)',
            600: 'var(--secondary-foreground-600)',
            700: 'var(--secondary-foreground-700)',
            800: 'var(--secondary-foreground-800)',
            900: 'var(--secondary-foreground-900)',
            950: 'var(--secondary-foreground-950)',
          },
        },
        card: {
          DEFAULT: 'var(--card-50)',
          50: 'var(--card-50)',
          100: 'var(--card-100)',
          200: 'var(--card-200)',
          300: 'var(--card-300)',
          400: 'var(--card-400)',
          500: 'var(--card-500)',
          600: 'var(--card-600)',
          700: 'var(--card-700)',
          800: 'var(--card-800)',
          900: 'var(--card-900)',
          950: 'var(--card-950)',
          foreground: {
            DEFAULT: 'var(--card-foreground-700)',
            50: 'var(--card-foreground-50)',
            100: 'var(--card-foreground-100)',
            200: 'var(--card-foreground-200)',
            300: 'var(--card-foreground-300)',
            400: 'var(--card-foreground-400)',
            500: 'var(--card-foreground-500)',
            600: 'var(--card-foreground-600)',
            700: 'var(--card-foreground-700)',
            800: 'var(--card-foreground-800)',
            900: 'var(--card-foreground-900)',
            950: 'var(--card-foreground-950)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
