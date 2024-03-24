import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  plugins: [
    reactRefresh(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    terser(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
  },
});
