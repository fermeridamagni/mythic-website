import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://getmythic.app',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/sparkle/appcast.xml': '/appcast.xml',
    '/discord': 'https://discord.gg/kQKdvjTVqh',
  },
});