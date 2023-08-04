import {
  processAssetFileNames,
  entryFileNames,
  chunkFileNames,
  assetDir,
} from "./assets-config.js";
import { defineConfig } from "vite";
import { resolve } from "path";
// Plugins
import { createHtmlPlugin } from "vite-plugin-html";
import browserslistToEsbuild from "browserslist-to-esbuild";
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";

export default defineConfig({
  root: "",
  resolve: {
    alias: {
      "@img": resolve(__dirname, "src/img/"),
      "@js": resolve(__dirname, "src/js/"),
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: "src/index.js",
      template: "index.html",
      inject: {
        data: {
          injectScript: `<script type="module" src="src/js/scripts.js"></script>`,
        },
      },
    }),
    viteHtmlResolveAlias(),
  ],
  build: {
    target: browserslistToEsbuild(),
    outDir: "dist",
    // assetsDir: assetDir,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // entryFileNames: `assets/[name].js`,
        // chunkFileNames: `assets/[name].js`,
        // assetFileNames: `assets/[name].[ext]`,
        entryFileNames: entryFileNames,
        assetFileNames: processAssetFileNames,
        chunkFileNames: chunkFileNames,
      },
    },
    sourcemap: true,
    minify: "esbuild",
  },
  publicDir: assetDir,
  esbuild: {
    /**
     * Prevents ESBuild to throw when using a feature not supported by the
     * list of supported browsers coming from the `browserslist` file.
     */
    supported: {
      "top-level-await": true,
    },
  },
});
