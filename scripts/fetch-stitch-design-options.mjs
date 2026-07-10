#!/usr/bin/env node
/**
 * Fetch all Stitch design-option screens and copy assets to public/design-options/.
 */
import { copyFile, mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Stitch, StitchToolClient } from '@google/stitch-sdk';
import { loadEnvFiles } from './load-env.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const PROJECT_ID = '1021744346406914327';

const SCREENS = [
  { slug: 'modern-retro-homepage', screenId: '8c2205705ee446eda10b3a57860d0434' },
  { slug: 'maximalist-retro-collage', screenId: '37def5a0809e4635bb10922acec3e22d' },
  { slug: 'sophisticated-minimalist-retro', screenId: 'b4a3a7b212ff4042a17c404329cc0a47' },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  await loadEnvFiles(root);

  const clientOpts = process.env.STITCH_API_KEY
    ? { apiKey: process.env.STITCH_API_KEY }
    : {
        accessToken: process.env.STITCH_ACCESS_TOKEN,
        projectId: process.env.GOOGLE_CLOUD_PROJECT,
      };

  if (!clientOpts.apiKey && !clientOpts.accessToken) {
    console.error('Set STITCH_API_KEY in .env.local (from stitch.withgoogle.com → Settings → API Keys)');
    console.error('The key must belong to the account that owns project', PROJECT_ID);
    process.exit(1);
  }

  const client = new StitchToolClient(clientOpts);
  const sdk = new Stitch(client);
  const publicDir = join(root, 'public', 'design-options');
  const stitchDir = join(root, 'stitch', 'design-options');
  await mkdir(publicDir, { recursive: true });
  await mkdir(stitchDir, { recursive: true });

  const manifest = {
    projectId: PROJECT_ID,
    fetchedAt: new Date().toISOString(),
    screens: [],
  };

  try {
    for (const { slug, screenId } of SCREENS) {
      console.log(`Fetching ${slug} (${screenId})...`);
      const screen = await sdk.project(PROJECT_ID).getScreen(screenId);
      const htmlUrl = await screen.getHtml();
      const imageUrl = await screen.getImage();
      const title = screen.data?.title ?? slug;

      const rawDir = join(stitchDir, slug);
      await mkdir(rawDir, { recursive: true });

      const htmlBytes = await download(htmlUrl, join(rawDir, 'screen.html'));
      await copyFile(join(rawDir, 'screen.html'), join(publicDir, `${slug}.html`));

      let imageBytes = 0;
      if (imageUrl) {
        imageBytes = await download(imageUrl, join(rawDir, 'screen.png'));
        await copyFile(join(rawDir, 'screen.png'), join(publicDir, `${slug}.png`));
      }

      const meta = { projectId: PROJECT_ID, screenId, title, htmlUrl, imageUrl, slug };
      await writeFile(join(rawDir, 'meta.json'), JSON.stringify(meta, null, 2));

      manifest.screens.push({ ...meta, htmlBytes, imageBytes });
      console.log(`  ✓ ${slug} → public/design-options/${slug}.png`);
    }

    await writeFile(join(stitchDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log('\nDone. Open /design-options on the site to review.');
  } catch (e) {
    console.error('\nStitch fetch failed:', e?.message ?? e);
    console.error(
      'If you see PERMISSION_DENIED, use an API key from the Google account that owns',
      '"Raquel Nicole Brand Redesign" in Stitch.',
    );
    process.exit(1);
  } finally {
    await client.close();
  }
}

main();
