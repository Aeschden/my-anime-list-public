import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    // If you already have a `vite: {}` section, just merge the `build.rollupOptions.external` below into it.
    vite: {
      build: {
        rollupOptions: {
          // Tells Rollup “when you see `import 'mongodb'`, treat it as external—never bundle it.”
          external: ['mongodb']
        }
      }
    }
  }
};
