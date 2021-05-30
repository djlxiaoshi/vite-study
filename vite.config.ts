import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import myPlugin from "./plugins/vite-plugin-test";
import { name } from "./package.json";
import path from "path";
import html from "@web/rollup-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    myPlugin(),
    html({
      input: "index.html",
    }),
  ],
  optimizeDeps: {
    // exclude: ["lodash-es"],
  },
  build: {
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, "./src/main.tsx"),
      formats: ["umd"],
    },
  },
  server: {
    port: 4003,
  },
});
