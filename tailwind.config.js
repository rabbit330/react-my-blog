/** @type {import('tailwindcss').Config} */
export default {
  content: [ // 新增
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        activeBlue: '#2573DA',
        mainBlue: '#194D91',
        mainGray: '#808080'
      },
      boxShadow: {
        primary: "0 0 4px rgba(0,0,0,0.5)"
      }
    }
  },
  plugins: [],
}

