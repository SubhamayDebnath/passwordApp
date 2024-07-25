/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f3f3fd',
      },
      fontFamily:{
        'Inter': ["Inter", 'sans-serif'],
      }
    },
  },
  plugins: [],
}