/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4D1C7',      // Warm peach / light coral
        secondary: '#E8B4B8',     // Soft rose pink
        accent: '#D96B3B',       // Vibrant orange (CTA)
        accentDark: '#B85C38',   // Burnt orange (hover)
        text: '#3D3632',         // Warm charcoal
        bg: '#FBF6F2',           // Cream / off-white
        neutralLavender: '#E8E0EB',
        neutralMint: '#D4E8E0',
        goldenOrange: '#E8A84A',
        goldenOrangeDark: '#D4892E',
        shadowRetro: '#A64B2A',
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'DM Serif Display', 'serif'],
        heading: ['var(--font-dm-serif)', 'DM Serif Display', 'serif'],
        body: ['var(--font-lato)', 'Lato', 'sans-serif'],
        script: ['var(--font-dancing)', 'Dancing Script', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'button': ['14px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      maxWidth: {
        'container': '100%',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1200px',
        'container-2xl': '1400px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FBF6F2 0%, #F4D1C7 40%, #E8B4B8 100%)',
        'wavy-stripe': 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(244,209,199,0.3) 80px, rgba(232,180,184,0.3) 160px)',
      },
    },
  },
  plugins: [],
};
