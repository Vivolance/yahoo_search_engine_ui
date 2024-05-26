import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'

config()

console.log("Environment Variables:")
console.log("YAHOO_SEARCH_ENGINE_URL: " + process.env.VITE_YAHOO_SEARCH_ENGINE_URL)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
