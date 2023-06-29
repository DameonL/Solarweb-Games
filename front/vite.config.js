import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    outDir: "../../deploy/public/",
    emptyOutDir: true,
    minify: "false",
    rollupOptions: {
      output: {
        entryFileNames: "index.tsx",
      },
    },
  },
});
