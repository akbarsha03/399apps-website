/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b8c8',
          400: '#8590a8',
          500: '#67718c',
          600: '#525a73',
          700: '#43495d',
          800: '#3a3f4f',
          900: '#0a0b12',
          950: '#05060b',
        },
        brand: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#bdd2ff',
          300: '#90b3ff',
          400: '#5e87fc',
          500: '#3a60f5',
          600: '#2541e6',
          700: '#1c31c9',
          800: '#1c2ca2',
          900: '#1d2a7f',
          950: '#141a4a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
