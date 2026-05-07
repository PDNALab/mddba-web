import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/mddba-web/',
  root: __dirname,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        partners: path.resolve(__dirname, 'pages/partners.html'),
        news: path.resolve(__dirname, 'pages/news.html'),
        events: path.resolve(__dirname, 'pages/events.html'),
        publications: path.resolve(__dirname, 'pages/publications.html'),
        community: path.resolve(__dirname, 'pages/community.html')
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
