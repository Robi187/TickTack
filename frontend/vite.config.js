import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

// https aktivieren (mit deinen Zertifikaten aus Docker!)
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    https: {
      key: fs.readFileSync('/certs/localhost+2-key.pem'),
      cert: fs.readFileSync('/certs/localhost+2.pem'),
    }
  }
})
