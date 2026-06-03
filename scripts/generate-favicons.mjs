/**
 * Regenerate favicons from public/guruko-logo.png:
 *   npx --yes sharp to-ico && node ./scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const logoPath = join(publicDir, "guruko-logo.png");

async function main() {
  const sharp = (await import("sharp")).default;
  const toIco = (await import("to-ico")).default;
  const logo = await readFile(logoPath);

  const resize = (size) =>
    sharp(logo)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png();

  const sizes = [
    ["favicon-16x16.png", 16],
    ["favicon-32x32.png", 32],
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ];

  for (const [name, size] of sizes) {
    await resize(size).toFile(join(publicDir, name));
  }

  const png16 = await resize(16).toBuffer();
  const png32 = await resize(32).toBuffer();
  const ico = await toIco([png16, png32]);
  await writeFile(join(publicDir, "favicon.ico"), ico);

  console.log("Generated favicon PNG/ICO assets from public/guruko-logo.png");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
