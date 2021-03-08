import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import myPlugin from "./plugins/vite-plugin-test";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), myPlugin()],
  optimizeDeps: {
    // exclude: ["lodash-es"],
  },
});
