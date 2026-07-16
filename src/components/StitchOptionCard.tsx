'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { StitchDesignOption } from '@/lib/stitch-design-options';

type StitchOptionCardProps = {
  option: StitchDesignOption;
  index: number;
  hasAssets: boolean;
};

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  'modern-retro-homepage':
    'linear-gradient(145deg, #FFF5F0 0%, #FFB8A8 40%, #FF8FAB 70%, #FF5C32 100%)',
  'maximalist-retro-collage':
    'linear-gradient(135deg, #FF4081 0%, #FF7043 35%, #FFB74D 65%, #FFD6E8 100%)',
  'sophisticated-minimalist-retro':
    'linear-gradient(160deg, #FFF8F0 0%, #E8C4B8 45%, #C9A8C8 75%, #F5EDE6 100%)',
};

const StitchOptionCard = ({ option, index, hasAssets }: StitchOptionCardProps) => {
  const reduceMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);
  const showImage = hasAssets && !imgError;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="theme-card overflow-hidden flex flex-col groovy-shadow"
    >
      <div className="relative border-b border-text/5 bg-bg">
        <div className="flex items-center justify-between gap-3 px-4 pt-4">
          <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary text-on-primary">
            Option {index + 1}
          </span>
          {showImage && (
            <a
              href={option.htmlPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-accent hover:text-accentDark"
            >
              Open full preview
            </a>
          )}
        </div>

        <div className="p-4 pt-3">
          {showImage ? (
            <a href={option.htmlPath} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-md">
                <Image
                  src={option.imagePath}
                  alt={`Stitch mockup: ${option.name}`}
                  width={1200}
                  height={2400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  onError={() => setImgError(true)}
                  priority={index === 0}
                />
              </div>
            </a>
          ) : (
            <div
              className="relative rounded-xl overflow-hidden border border-primary/20 shadow-inner min-h-[280px] flex items-end p-6"
              style={{ background: PLACEHOLDER_GRADIENTS[option.id] }}
            >
              <p className="text-sm font-medium text-on-surface-variant bg-surface-container-low rounded-lg px-3 py-2">
                Stitch screenshot pending. Run <code className="text-xs">npm run stitch:fetch-options</code> with
                your API key.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary mb-1">{option.name}</h2>
          <p className="text-sm font-medium text-on-surface-variant">{option.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-on-surface-variant">{option.bestFor}</p>

        <ul className="flex flex-wrap gap-2">
          {option.styleTraits.map((trait) => (
            <li
              key={trait}
              className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary-fixed/50 text-on-surface"
            >
              {trait}
            </li>
          ))}
        </ul>

        <p className="mt-auto text-center text-sm font-semibold pt-3 border-t border-primary/15 text-primary">
          Reply with <span className="font-bold">{index + 1}</span> to choose this direction
        </p>
      </div>
    </motion.article>
  );
};

export default StitchOptionCard;
