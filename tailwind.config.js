/** @type {import('tailwindcss').Config} */
export default {
  content: [ // 新增
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        primary: "0 0 4px rgba(0,0,0,0.5)"
      }
    }
  },
  plugins: [],
}

