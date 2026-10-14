import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      verboseFileRoutes: false,
    }),
    react(),
    tailwindcss(),
    {
      name: 'defer-app-css',
      apply: 'build',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          return html.replace(
            /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
            `<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media='all'">`,
          )
        },
      },
    },
  ],
})
