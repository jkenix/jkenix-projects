import {
  processAssetFileNames,
  entryFileNames,
  chunkFileNames,
  assetDir,
} from "./assets-config.js";
import { defineConfig } from "vite";
import { resolve } from "path";
import { insertHtml, h } from "vite-plugin-insert-html";
// Plugins
import browserslistToEsbuild from "browserslist-to-esbuild";
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";
// Config
export default defineConfig({
  root: "",
  resolve: {
    alias: {
      "@img": resolve(__dirname, "/src/img/"),
      "@s": resolve(__dirname, "/src/styles/"),
      "@js": resolve(__dirname, "/src/js/"),
    },
  },
  plugins: [
    viteHtmlResolveAlias(),
    // insertHtml({
    //   body: [
    //     h("script", {
    //       type: "module",
    //       crossorigin: "",
    //       src: "/index.js",
    //     }),
    //   ],
    // }),
  ],
  build: {
    target: browserslistToEsbuild(),
    outDir: "dist",
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: entryFileNames,
        assetFileNames: processAssetFileNames,
        chunkFileNames: chunkFileNames,
      },
    },
    sourcemap: true,
    minify: "esbuild",
  },
  publicDir: `${assetDir}`,
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
