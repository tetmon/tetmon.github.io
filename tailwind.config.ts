import type { Config } from 'tailwindcss';

const config: Config = {
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
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'conveyor': 'conveyor 60s linear infinite'
      }
    },
  }
}
export default config
