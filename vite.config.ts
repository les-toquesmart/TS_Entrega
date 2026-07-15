import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const repoBase = '/TS_Entrega/'

export default defineConfig({
  base: repoBase,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'assets/logo-dark.png',
        'assets/logo-white.png',
        'assets/default-cover.png',
        'assets/icon-192.png',
        'assets/icon-512.png',
      ],
      manifest: {
        name: 'Toque Smart Entregas',
        short_name: 'TS Entregas',
        description: 'Actas de entrega y aceptación de proyectos Toque Smart',
        start_url: repoBase,
        scope: repoBase,
        theme_color: '#102638',
        background_color: '#eef2f5',
        display: 'standalone',
        orientation: 'portrait',
        lang: 'es',
        icons: [
          { src: `${repoBase}assets/icon-192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${repoBase}assets/icon-512.png`, sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        navigateFallback: `${repoBase}index.html`,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
      },
    }),
  ],
})
