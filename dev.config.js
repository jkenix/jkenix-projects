// Dev
import { defineConfig } from "vite";
import { resolve } from "path";
// Plugins
import { createHtmlPlugin } from "vite-plugin-html";
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
          injectScript: `<script src="@js/scripts.js"></script>`,
        },
      },
    }),
    viteHtmlResolveAlias(),
  ],
});
