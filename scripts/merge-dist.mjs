import { rm, readdir, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  const clientDir = join(process.cwd(), 'dist', 'client');
  const rootDist = join(process.cwd(), 'dist');
  try {
    // Copy client contents to dist root
    await copyDir(clientDir, rootDist);
    // Remove the now-empty client folder (and optionally server if present)
    await rm(clientDir, { recursive: true, force: true });
  } catch (err) {
    console.error('merge-dist failed:', err);
    process.exitCode = 1;
  }
}

main();
