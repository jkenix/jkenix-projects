// Dev
import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
// Plugins
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";
import handlebars from "vite-plugin-handlebars";
import HandlebarsUpdate from "./handlebarsUpdate";

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
    handlebars({
      context: {
        title: "Test Handlebars",
      },
      partialDirectory: resolve(__dirname, "partials"),
    }),
    HandlebarsUpdate(),
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // appSchoool: fileURLToPath(new URL("./index2.html", import.meta.url)),
  //     },
  //   },
  // },
});
