/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowcst: '#dfaf63',
        yellowdst: '#b47e29',
      }
    },
    
  },
  plugins: [],
}

