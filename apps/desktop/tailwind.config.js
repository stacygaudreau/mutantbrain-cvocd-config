/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': 'rgb(var(--color-off-white))',
        'black': 'rgb(var(--color-black))',
        'black-highlight': 'rgb(var(--color-black-highlight))',
        'bg-main': 'rgb(var(--color-bg-main))',
        'bg-panel': 'rgb(var(--color-bg-panel))',
        'mutant-orange': 'rgb(var(--color-mutant-orange))',
        'mutant-green': 'rgb(var(--color-mutant-green))',
        'mutant-grey': 'rgb(var(--color-mutant-grey))',
        'mutant-grey-highlight': 'rgb(var(--color-mutant-grey-highlight))',
        'mutant-grey-dark': 'rgb(var(--color-mutant-grey-dark))',
        'border-orange': 'rgb(var(--color-border-orange))',
        'warning': 'rgb(var(--color-warning))',
        'success': 'rgb(var(--color-success))',
        'error': 'rgb(var(--color-error))',
        'grey': 'rgb(var(--color-grey))',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
