import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Unocss({
      presets: [
        presetUno({
          /* options */
        }),
        presetIcons({
          /* options */
        }),
      ],
    }),
  ],
});
