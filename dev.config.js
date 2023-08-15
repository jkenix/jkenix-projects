// Dev
import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { insertHtml, h } from "vite-plugin-insert-html";
// Plugins
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";

export default defineConfig({
  root: "",
  publicDir: "assets",
  server: {
    port: "5000",
    open: "index.html",
    hmr: true,
    // Enable overlay for both errors and warnings.
    overlay: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes("node_modules");
    },
  },
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
    //       src: "/src/index.js",
    //     }),
    //   ],
    // }),
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // appSchoool: fileURLToPath(new URL("./index2.html", import.meta.url)),
  //     },
  //   },
  // },
});
