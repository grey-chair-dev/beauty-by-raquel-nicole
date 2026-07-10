#!/usr/bin/env node
/**
 * Download Stitch screen HTML + screenshot for a project/screen ID.
 */
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Stitch, StitchToolClient } from '@google/stitch-sdk';
import { loadEnvFiles } from './load-env.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function parseArgs(argv) {
  const args = { projectId: '', screenId: '', outDir: '' };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--project-id') args.projectId = argv[++i];
    else if (a === '--screen-id') args.screenId = argv[++i];
    else if (a === '--out-dir') args.outDir = argv[++i];
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return { dest, bytes: buf.length };
}

async function main() {
  await loadEnvFiles(root);

  const { projectId, screenId, outDir, help } = parseArgs(process.argv);
  if (help || !projectId || !screenId) {
    console.error(
      'Usage: node scripts/fetch-stitch-screen.mjs --project-id ID --screen-id ID [--out-dir path]',
    );
    process.exit(help ? 0 : 1);
  }

  const targetDir = outDir ? join(root, outDir) : join(root, 'stitch', projectId, screenId);

  const clientOpts = process.env.STITCH_API_KEY
    ? { apiKey: process.env.STITCH_API_KEY }
    : {
        accessToken: process.env.STITCH_ACCESS_TOKEN,
        projectId: process.env.GOOGLE_CLOUD_PROJECT,
      };

  if (!clientOpts.apiKey && !clientOpts.accessToken) {
    console.error('Set STITCH_API_KEY or STITCH_ACCESS_TOKEN + GOOGLE_CLOUD_PROJECT');
    process.exit(1);
  }

  const client = new StitchToolClient(clientOpts);
  const sdk = new Stitch(client);

  try {
    const screen = await sdk.project(projectId).getScreen(screenId);
    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();

    await mkdir(targetDir, { recursive: true });

    const meta = {
      projectId,
      screenId,
      title: screen.data?.title ?? null,
      htmlUrl,
      imageUrl,
      fetchedAt: new Date().toISOString(),
    };

    const html = await download(htmlUrl, join(targetDir, 'screen.html'));

    let image = null;
    if (imageUrl) {
      image = await download(imageUrl, join(targetDir, 'screen.png'));
    } else {
      console.warn('  No screenshot URL for this screen.');
    }

    await writeFile(join(targetDir, 'meta.json'), JSON.stringify(meta, null, 2));

    console.log('Wrote', targetDir);
    console.log('  screen.html', html.bytes, 'bytes');
    if (image) console.log('  screen.png', image.bytes, 'bytes');
    console.log('  meta.json');
  } catch (e) {
    console.error('Stitch fetch failed:', e?.code ?? 'ERROR', e?.message ?? e);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main();
