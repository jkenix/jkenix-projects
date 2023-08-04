export const assetDir = "assets";
// Add ${assetDir}/path-to-directory and
// the file path will be assets/path-to-dev-directory
// If you want to remove settings for path assets/...
// Delete first "/". Template: js[name.js]
export const entryFileNames = `js/[name].js`;
export const chunkFileNames = `js/[name]-[hash]-chunk.js`;

const assets = [
  // Same settings (See col 2 in code)
  {
    output: `img/[name][extname]`,
    regex: /\.(png|jpe?g|gif|svg|webp|avif)$/,
  },
  { output: `css/[name][extname]`, regex: /\.css$/ },
  { output: `js/[name]`, regex: /\.jsx?$/ },
];

export function processAssetFileNames(info) {
  if (info && info.name) {
    const name = info.name;
    const result = assets.find((a) => a.regex.test(name));
    if (result) {
      return result.output;
    }
  }
  return `${assetDir}/[name]`;
}
