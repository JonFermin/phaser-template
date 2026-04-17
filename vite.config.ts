import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@scenes": r("./src/scenes"),
      "@entities": r("./src/entities"),
      "@utils": r("./src/utils"),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
        },
      },
    },
  },
});
