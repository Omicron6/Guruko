/**
 * Regenerate PNG/ICO from public/favicon.svg (one-time setup):
 *   npx --yes sharp to-ico && node ./scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const svgPath = join(publicDir, "favicon.svg");

async function main() {
  const sharp = (await import("sharp")).default;
  const toIco = (await import("to-ico")).default;
  const svg = await readFile(svgPath);

  const sizes = [
    ["favicon-16x16.png", 16],
    ["favicon-32x32.png", 32],
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ];

  for (const [name, size] of sizes) {
    await sharp(svg).resize(size, size).png().toFile(join(publicDir, name));
  }

  const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
  const ico = await toIco([png16, png32]);
  await writeFile(join(publicDir, "favicon.ico"), ico);

  console.log("Generated favicon PNG/ICO assets in public/");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
