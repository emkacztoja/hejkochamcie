// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hejlenkakochamcie.pl',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});