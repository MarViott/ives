import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Deshabilitar transformaciones innecesarias de JSX
      babel: {
        plugins: [],
        // No usar babel runtime para navegadores modernos
        babelrc: false,
        configFile: false,
      },
    }),
  ],
  
  build: {
    // Target para navegadores modernos (ES2020+)
    target: 'es2020',
    
    // Habilitar minificación moderna
    minify: 'esbuild',
    
    // Configuración de esbuild para código moderno
    cssTarget: 'chrome90',
    
    rollupOptions: {
      output: {
        // Manual chunks para mejor code splitting
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet-vendor': ['react-helmet-async'],
          'toast-vendor': ['react-toastify'],
        },
        // Formato ES modules moderno
        format: 'es',
        // Nombres optimizados para cache
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    
    // Optimizar chunk size
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Source maps solo en desarrollo
    sourcemap: false,
    
    // Reportar compressed size
    reportCompressedSize: false,
  },
  
  // Optimizar servidor de desarrollo
  server: {
    warmup: {
      clientFiles: ['./src/App.jsx', './src/main.jsx'],
    },
  },
  
  // Optimizar CSS
  css: {
    devSourcemap: false,
  },
  
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Usar esbuild para pre-bundling rápido
    esbuildOptions: {
      target: 'es2020',
    },
  },
  
  // Deshabilitar legacy polyfills
  legacy: false,
})
