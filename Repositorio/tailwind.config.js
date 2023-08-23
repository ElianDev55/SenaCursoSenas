/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cafeteros': "url('./src/assets/background.png')",
        'tierra': "url('./src/assets/back1.png')",
      },
      colors: {
        10: '#39A900',
        20: '#00324D',
        30: '#82DEF0',
        40: '#FFCE40',
        50: '#385C57'
      },
    },
  },
  plugins: [],
}

