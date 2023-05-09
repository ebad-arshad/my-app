/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './containers/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#202124',
        gray: '#525355',
        primary: '#9aa0a6',
        border: '#5f6368',
      },
      backgroundColor: {
        dark: '#202124',
        gray: '#525355',
        primary: '#9aa0a6',
        border: '#5f6368',
      }
    },
  },
  plugins: [],
}
