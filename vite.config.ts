
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages deployment - use repository name as base path
  // If your repo is at github.com/username/isaac-anderson-art, use '/isaac-anderson-art/'
  // If it's a user/organization page (github.com/username/username.github.io), use '/'
  base: command === 'build' ? '/isaac-anderson-art/' : '/',
}));
