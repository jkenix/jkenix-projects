export const assetDir = "assets";
// Add ${assetDir}/path-to-directory and
// the file path will be assets/path-to-dev-directory
// Or set settings for path assets/...
// Delete first "/". Template: js[name.js]
export const entryFileNames = `js/[name].js`;
export const chunkFileNames = `js/[name]-[hash]-chunk.js`;
const assets = [
  {
    output: `img/[hash][extname]`,
    regex: /\.(png|jpe?g|gif|svg|webp|avif)$/,
  },
  { output: `[name][extname]`, regex: /\.css$/ },
  { output: `js/[name][extname]`, regex: /\.jsx?$/ },
  { output: `[name][extname]`, regex: /\.css$/ },
  {
    output: `webfonts/[name][extname]`,
    regex: /\.(ttf|otf|fnt|woff)$/,
  },
];

export function processAssetFileNames(info) {
  if (info && info.name) {
    const name = info.name;
    const result = assets.find((a) => a.regex.test(name));
    if (result) {
      return result.output;
    }
  }
  // default since we don't have an entry
  return `${assetDir}/[name][extname]`;
}
