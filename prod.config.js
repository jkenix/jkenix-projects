import {
  processAssetFileNames,
  entryFileNames,
  chunkFileNames,
  assetDir,
} from "./assets-config.js";
import { defineConfig } from "vite";
import { resolve } from "path";
// Plugins
import browserslistToEsbuild from "browserslist-to-esbuild";
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { ViteMinifyPlugin } from "vite-plugin-minify";
// import { manualChunksPlugin } from "vite-plugin-webpackchunkname";
import handlebars from "vite-plugin-handlebars";
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
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      // test: /\.(svg)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          "sortAttrs",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 80,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
    handlebars({
      context: {
        menu: ["Features", "About", "Pricing", "Blog", "Contact"],
        partners: [
            "logoipsum",
            "logoipsum-2",
            "logoipsum-3",
            "logoipsum-4",
            "logoipsum-5",
            "logoipsum-6",
        ],
        feauters: [
            {
                img: "feauters1",
                title: "Live Collaboration",
            },
            {
                img: "feauters2",
                title: "1M+ Templates",
            },
            {
                img: "feauters3",
                title: "Searchable Assets",
            },
            {
                img: "feauters4",
                title: "Unlimited Reviewers",
            },
            {
                img: "feauters5",
                title: "Notifications",
            },
            {
                img: "feauters6",
                title: "Responsive Design",
            },
            {
                img: "feauters7",
                title: "Multiple media support",
            },
            {
                img: "feauters8",
                title: "Version history",
            },
        ],
        collab_preim: [
            "Produce more ads without spending more time",
            "Get notified about comments and status updates",
            "Have one single source of truth for all design",
        ],
      },
      partialDirectory: resolve(__dirname, "partials"),
    }),
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
