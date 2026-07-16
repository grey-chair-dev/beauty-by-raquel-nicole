const ITEMS =
  'LIVED-IN COLOR • DIMENSIONAL BLONDING • CURLY CUTS • HAND-TIED EXTENSIONS • BRIDAL HAIR • RETRO STYLING •';

const MarqueeStrip = () => {
  return (
    <div className="bg-primary-fixed py-3 border-y-2 border-primary overflow-hidden" aria-hidden>
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="flex-shrink-0 px-6 text-primary font-heading text-xl md:text-2xl font-bold tracking-tight">
          {ITEMS}
        </span>
        <span className="flex-shrink-0 px-6 text-primary font-heading text-xl md:text-2xl font-bold tracking-tight">
          {ITEMS}
        </span>
      </div>
    </div>
  );
};

export default MarqueeStrip;
