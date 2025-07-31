import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@pages': resolve(__dirname, 'src/pages')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          components: [
            './src/components/Header',
            './src/components/Hero',
            './src/components/Services',
            './src/components/About',
            './src/components/TechStack',
            './src/components/CaseStudies',
            './src/components/Testimonials',
            './src/components/ClientLogos',
            './src/components/Blog',
            './src/components/Contact',
            './src/components/Footer',
            './src/components/ChatWidget'
          ]
        }
      }
    }
  }
})