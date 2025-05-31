import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      // Prevent Rollup from trying to bundle `mongodb` into your client output
      external: ['mongodb']
    }
  }
});
