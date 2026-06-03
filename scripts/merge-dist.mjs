import { rm, readdir, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';

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

    // Ensure a root index exists for hosts that serve `dist/` directly.
    const indexPath = join(rootDist, 'index.html');
    const clientIndexPath = join(clientDir, 'index.html');
    try {
      await readFile(indexPath, { encoding: 'utf8' });
    } catch {
      try {
        const clientIndex = await readFile(clientIndexPath, { encoding: 'utf8' });
        await writeFile(indexPath, clientIndex, { encoding: 'utf8' });
      } catch {
        console.warn('Could not locate an index.html in dist/ or dist/client/; skipping loader injection.');
        return;
      }
    }

    // Inject a small resilient loader into index.html so static hosts don't show a blank page
    try {
      let html = await readFile(indexPath, { encoding: 'utf8' });
      const moduleMatch = html.match(/<script[^>]*type=["']module["'][^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>/i);
      if (moduleMatch) {
        const moduleSrc = moduleMatch[1];
        const loaderScript = `\n    <script>\n      (async function(){\n        try{\n          await import('${moduleSrc}');\n        }catch(err){\n          console.error('Client boot failed', err);\n          const root = document.getElementById('root') || document.body;\n          if(root){\n            root.innerHTML = '<div style="font-family: system-ui, -apple-system, sans-serif; padding:2rem; text-align:center; color:#b91c1c"><h1>App failed to load</h1><pre style="white-space:pre-wrap; text-align:left; max-width:800px; margin:0 auto;">'+String(err)+'</pre></div>'\n          }\n        }\n      })();\n    <\/script>\n`;
        // Insert before closing </body>
        html = html.replace(/<\/body>/i, loaderScript + '</body>');
        await writeFile(indexPath, html, { encoding: 'utf8' });
      }
    } catch (e) {
      // non-fatal
      console.warn('Could not inject loader into index.html', e);
    }
  } catch (err) {
    console.error('merge-dist failed:', err);
    process.exitCode = 1;
  }
}

main();
