// https://vitejs.dev/config/
// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({

  resolve: {
    extensions: ['.js']
  },

  plugins: [
    react()
  ]

})
