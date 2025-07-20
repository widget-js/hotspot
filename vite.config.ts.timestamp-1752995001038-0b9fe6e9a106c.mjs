// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/vite@5.2.8_@types+node@18.19.31_sass@1.74.1_terser@5.30.3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.2.8_@types+node@18.19.31_sass@1.74.1_terser@5.30.3__vue@3.4.21_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/unplugin-auto-import@0.11.5_@vueuse+core@12.4.0_typescript@5.5.2__rollup@4.14.1_webpack-sources@3.2.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/unplugin-vue-components@0.22.12_@babel+parser@7.26.2_rollup@4.14.1_vue@3.4.21_typescript@5.5.2__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/unplugin-vue-components@0.22.12_@babel+parser@7.26.2_rollup@4.14.1_vue@3.4.21_typescript@5.5.2__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import widget from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/@widget-js+vite-plugin-widget@24.1.1-beta.71_@types+node@18.19.31_sass@1.74.1_terser@5.30.3/node_modules/@widget-js/vite-plugin-widget/dist/index.mjs";
import UnoCSS from "file:///C:/Users/rtuge/Desktop/workspace/widgetjs/node_modules/.pnpm/unocss@66.1.1_postcss@8.4.38_vite@5.2.8_@types+node@18.19.31_sass@1.74.1_terser@5.30.3__vue@3.4.21_typescript@5.5.2_/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "C:\\Users\\rtuge\\Desktop\\workspace\\widgetjs\\packages\\hotspot";
var vite_config_default = defineConfig(({ mode }) => ({
  base: mode == "offline" ? "" : "/hotspot/",
  plugins: [
    vue(),
    UnoCSS(),
    widget({ generateFullNamePackage: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxydHVnZVxcXFxEZXNrdG9wXFxcXHdvcmtzcGFjZVxcXFx3aWRnZXRqc1xcXFxwYWNrYWdlc1xcXFxob3RzcG90XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxydHVnZVxcXFxEZXNrdG9wXFxcXHdvcmtzcGFjZVxcXFx3aWRnZXRqc1xcXFxwYWNrYWdlc1xcXFxob3RzcG90XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ydHVnZS9EZXNrdG9wL3dvcmtzcGFjZS93aWRnZXRqcy9wYWNrYWdlcy9ob3RzcG90L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IHdpZGdldCBmcm9tICdAd2lkZ2V0LWpzL3ZpdGUtcGx1Z2luLXdpZGdldCdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgYmFzZTogbW9kZSA9PSAnb2ZmbGluZScgPyAnJyA6ICcvaG90c3BvdC8nLFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgVW5vQ1NTKCksXG4gICAgd2lkZ2V0KHsgZ2VuZXJhdGVGdWxsTmFtZVBhY2thZ2U6IHRydWUgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfV0sXG4gIH0sXG59KSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1gsT0FBTyxVQUFVO0FBQ2pZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBUG5CLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsTUFBTSxRQUFRLFlBQVksS0FBSztBQUFBLEVBQy9CLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSx5QkFBeUIsS0FBSyxDQUFDO0FBQUEsSUFDeEMsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
