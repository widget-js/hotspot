import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import widget from '@widget-js/vite-plugin-widget';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode == 'offline' ? '' : '/hotspot/',
  plugins: [
    vue(),
    widget({ generateFullNamePackage: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
}));
