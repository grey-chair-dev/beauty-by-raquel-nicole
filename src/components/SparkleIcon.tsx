interface SparkleIconProps {
  className?: string;
  size?: number;
}

/** 4-point starburst (Retro Funky / 70s Glow style) - use sparingly */
const SparkleIcon = ({ className = '', size = 16 }: SparkleIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-goldenOrange ${className}`}
    aria-hidden
  >
    <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
  </svg>
);

export default SparkleIcon;
