import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        edgeset: "#215f74"
      },
      height: {
      },
      fontSize: {
        '4xl': '2.5rem'
      },
      lineHeight: {
        '11': '2.75rem'
      },
      maxWidth: {
        '8xl': '1400px'
      },
      maxHeight: {
        '100': '30rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'node-pattern': 'url(/assets/node-pattern.svg)'
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16'
      },
      gridColumnEnd: {
        '16': '16',
        'none': 'none'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'conveyor': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        },
        moveDot: {
          '0%': { opacity: '1', right: '-10px' },
          '99%': { opacity: '1', right: '-34px' },
          '100%': { opacity: '0', right: '-34px' },
        },
        moveLeftToMiddle: {
          '0%': { opacity: '1', left: '32%' },
          '100%': { opacity: '1', left: '50%' },
        },
        moveMiddleToRight: {
          '0%': { opacity: '0', left: '50%' },
          '1%': { opacity: '1', left: '50%' },
          '99%': { opacity: '1', left: '68%' },
          '100%': { opacity: '0', left: '68%' },
        },
        moveRightDot: {
          '0%': { opacity: '0', left: '-25px' },
          '1%': { opacity: '1', left: '-25px' },
          '100%': { opacity: '1', left: '-5px' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'conveyor': 'conveyor 60s linear infinite',
        moveDot: 'moveDot 0.25s linear forwards',
        moveLeftToMiddle: 'moveLeftToMiddle 1.2s linear 0.27s forwards',
        moveMiddleToRight: 'moveMiddleToRight 0.8s linear 1s forwards',
        moveRightDot: 'moveRightDot 0.2s linear 1.8s forwards',
      }
    },
  }
}
export default config
