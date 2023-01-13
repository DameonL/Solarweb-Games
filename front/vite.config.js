import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h } from "preact"`,
  },
  build: {
    outDir: "../../deploy/public/",
    emptyOutDir: true,
    minify: "false",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
  vite: {
    define: {
      global: {},
    },
  },
});
