import { Metadata } from 'next';
import Link from 'next/link';
import { access } from 'fs/promises';
import { join } from 'path';
import StitchOptionCard from '@/components/StitchOptionCard';
import {
  ACTIVE_SITE_NOTE,
  STITCH_DESIGN_OPTIONS,
  STITCH_PROJECT_TITLE,
} from '@/lib/stitch-design-options';

export const metadata: Metadata = {
  title: 'Design Options | Beauty by Raquel Nicole',
  description: 'Three Stitch design directions for Raquel to review.',
  robots: { index: false, follow: false },
};

async function assetExists(relativePath: string) {
  try {
    await access(join(process.cwd(), 'public', relativePath.replace(/^\//, '')));
    return true;
  } catch {
    return false;
  }
}

export default async function DesignOptionsPage() {
  const assetChecks = await Promise.all(
    STITCH_DESIGN_OPTIONS.map(async (option) => ({
      id: option.id,
      hasAssets: await assetExists(option.imagePath),
    })),
  );
  const assetMap = Object.fromEntries(assetChecks.map((a) => [a.id, a.hasAssets]));
  const allAssetsReady = assetChecks.every((a) => a.hasAssets);

  return (
    <main className="min-h-[100dvh] bg-bg section-transition">
      <div className="container-custom py-10 md:py-14">
        <header className="max-w-2xl mb-8 md:mb-10">
          <p className="font-label text-primary font-semibold text-sm mb-3">For Raquel</p>
          <h1 className="theme-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Pick your Stitch design direction
          </h1>
          <p className="text-body text-on-surface-variant leading-relaxed max-w-[65ch] mb-4">
            Three homepage concepts from <strong className="text-on-surface">{STITCH_PROJECT_TITLE}</strong> in Google
            Stitch. Same business, same booking goal. Different visual personality.
          </p>
          <p className="text-body text-on-surface-variant/80 text-sm max-w-[65ch]">
            Reply with <strong className="text-on-surface">1</strong>, <strong className="text-on-surface">2</strong>, or{' '}
            <strong className="text-on-surface">3</strong>. Tap a preview to open the full Stitch mockup in a new tab.
          </p>
          <Link
            href="/"
            className="inline-flex items-center mt-8 text-sm font-semibold text-primary hover:text-accentDark transition-colors"
          >
            ← Back to live site
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:gap-12">
          {STITCH_DESIGN_OPTIONS.map((option, index) => (
            <StitchOptionCard
              key={option.id}
              option={option}
              index={index}
              hasAssets={assetMap[option.id] ?? false}
            />
          ))}
        </div>

        <aside className="mt-14 md:mt-16 grid gap-6 md:grid-cols-2">
          <div className="theme-card p-6 md:p-8 bg-primary-fixed/25">
            <h2 className="theme-heading text-lg mb-2">Quick cheat sheet</h2>
            <ul className="text-body text-on-surface-variant text-sm space-y-2">
              <li>
                <strong className="text-on-surface">1 Modern Retro</strong> - Balanced warmth + booking clarity
              </li>
              <li>
                <strong className="text-on-surface">2 Maximalist Collage</strong> - Boldest, most playful
              </li>
              <li>
                <strong className="text-on-surface">3 Sophisticated Minimalist</strong> - Retro, but calmer
              </li>
            </ul>
          </div>
          <div className="theme-card p-6 md:p-8 bg-primary-fixed/25">
            <h2 className="theme-heading text-lg mb-2">Live site note</h2>
            <p className="text-body text-on-surface-variant leading-relaxed text-sm">{ACTIVE_SITE_NOTE}</p>
            {!allAssetsReady && (
              <p className="text-body text-on-surface-variant/70 text-xs mt-3 leading-relaxed">
                Previews populate after Stitch assets are fetched to{' '}
                <code className="text-[11px]">public/design-options/</code>.
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
