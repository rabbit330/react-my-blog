import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"; // 1. 引入path


import macrosPlugin from "vite-plugin-babel-macros"



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: { // 2. 新增別名
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

