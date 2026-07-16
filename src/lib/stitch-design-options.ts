export const STITCH_PROJECT_ID = '1021744346406914327';
export const STITCH_PROJECT_TITLE = 'Raquel Nicole Brand Redesign';

export type StitchDesignOption = {
  id: string;
  screenId: string;
  name: string;
  tagline: string;
  bestFor: string;
  styleTraits: [string, string, string];
  /** Public path after `npm run stitch:fetch-options` */
  imagePath: string;
  htmlPath: string;
};

/** Stitch screen order for Raquel's review (1, 2, 3). */
export const STITCH_DESIGN_OPTIONS: StitchDesignOption[] = [
  {
    id: 'modern-retro-homepage',
    screenId: '8c2205705ee446eda10b3a57860d0434',
    name: 'Modern Retro Homepage',
    tagline: 'Balanced retro energy with clear booking path.',
    bestFor:
      'The middle ground: warm color, personality, and a homepage that still reads professional for Milford clients booking color or bridal.',
    styleTraits: ['Hero + gallery flow', 'Retro warmth', 'Book-first layout'],
    imagePath: '/design-options/modern-retro-homepage.png',
    htmlPath: '/design-options/modern-retro-homepage.html',
  },
  {
    id: 'maximalist-retro-collage',
    screenId: '37def5a0809e4635bb10922acec3e22d',
    name: 'Maximalist Retro Collage',
    tagline: 'Bold blocks, collage energy, highest personality.',
    bestFor:
      'The loudest option. Layered shapes, strong color fields, and playful retro details for maximum Instagram vibe.',
    styleTraits: ['Collage sections', 'Bold color blocks', 'Highest energy'],
    imagePath: '/design-options/maximalist-retro-collage.png',
    htmlPath: '/design-options/maximalist-retro-collage.html',
  },
  {
    id: 'sophisticated-minimalist-retro',
    screenId: 'b4a3a7b212ff4042a17c404329cc0a47',
    name: 'Sophisticated Minimalist Retro',
    tagline: 'Refined retro with more breathing room.',
    bestFor:
      'Retro taste without visual noise. Cleaner type, softer layout rhythm, still warmer and brighter than the old plain site.',
    styleTraits: ['Editorial spacing', 'Muted retro palette', 'Calm confidence'],
    imagePath: '/design-options/sophisticated-minimalist-retro.png',
    htmlPath: '/design-options/sophisticated-minimalist-retro.html',
  },
];

export const ACTIVE_SITE_NOTE =
  'The live site now uses the Modern Retro Homepage direction (Stitch Option 1).';
