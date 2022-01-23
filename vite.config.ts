import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import usePluginImport from 'vite-plugin-importer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    usePluginImport({
      libraryName: 'antd', // todo please input your babel-plugin-import config
      libraryDirectory: "es",
      style: 'css',
    }),
  ],
  optimizeDeps: {
    exclude: ["lodash-es"],
  },
  build: {
    target: 'es2015',
    minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    manifest: false, // 是否产出maifest.json
    sourcemap: true, // 是否产出soucemap.json
    outDir: 'dist', // 产出目录
  },
  server: {
    force: true,
    port: 4003,
  },
  css: {
    preprocessorOptions: {
      scss: {},
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
