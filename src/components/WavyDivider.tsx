type Variant = 'cream-peach' | 'peach-pink' | 'single' | 'cream-dark';

interface WavyDividerProps {
  variant?: Variant;
  className?: string;
  flip?: boolean;
}

const WavyDivider = ({ variant = 'cream-peach', className = '', flip = false }: WavyDividerProps) => {
  const paths = {
    'cream-peach': {
      top: '#fff9ee',
      bottom: '#ffdbd1',
    },
    'peach-pink': {
      top: '#ffdbd1',
      bottom: '#ffd9e5',
    },
    single: {
      top: 'transparent',
      bottom: '#fdad99',
    },
    'cream-dark': {
      top: '#fff9ee',
      bottom: '#a43716',
    },
  };
  const { top, bottom } = paths[variant];
  const transform = flip ? 'scaleY(-1)' : undefined;

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12"
        aria-hidden
      >
        <path
          fill={top}
          d="M0,64 C300,120 600,0 900,64 C1050,96 1125,80 1200,64 L1200,120 L0,120 Z"
        />
        <path fill={bottom} d="M0,80 C400,20 800,100 1200,80 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};

export default WavyDivider;
