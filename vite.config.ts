import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    mkcert(),
    nodePolyfills({
      exclude: ['fs'],
      protocolImports: true,
    }),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
  ],
  server: {
    https: true,     // <-- serve over HTTPS
    port: 3001,
    host: 'localhost',
  },
  preview: { https: true },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      buffer: 'vite-plugin-node-polyfills/shims/buffer',
      global: 'vite-plugin-node-polyfills/shims/global',
      process: 'vite-plugin-node-polyfills/shims/process',
    },
  },
  envPrefix: ['VITE_'],
})
