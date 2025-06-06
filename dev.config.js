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
            helpers: {},
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
