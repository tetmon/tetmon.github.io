import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    function ({ addVariant }: { addVariant: (variant: string, selector: string) => void }) {
      addVariant('firefox', ':-moz-any(&)')
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: "#215f74",
        highlight: "#3f788b",
        primaryLight: "#2995B9",
        borderLight: "#bbd1d9",
        whiteLight: "rgba(255, 255, 255, 0.2)",
        whiteLight_0_6: "rgba(255, 255, 255, 0.06)",
        whiteLight2: "rgba(255, 255, 255, 0.5)",
        whiteLight3: "rgba(255, 255, 255, 0.8)"
      },
      fontSize: {
        '4xl': '2.5rem'
      },
      lineHeight: {
        '11': '2.75rem'
      },
      maxWidth: {
        '8xl': '1400px',
        container: '1536px'
      },
      maxHeight: {
        '100': '30rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'node-pattern': 'url(/assets/node-pattern.svg)',
        'box-pattern': 'url(/assets/box-pattern.svg)',
        'left': 'url(/assets/left.svg)',
        'right': 'url(/assets/right.svg)',
        'left-right': "url('/assets/left.svg'), url('/assets/right.svg')",
        // "halo-gradient": "radial-gradient(40% 40% at 70% 30%, #215f7473 0%, rgba(255, 239, 92, 0) 100%)"
        "number-gradient": "linear-gradient(180deg, #0ea5e9bf -40.72%, rgba(135, 252, 196, .06) 99.03%)",
        "halo-gradient": "radial-gradient(39.4% 77% at 67.6% 56.5%, #215f742e 0%, rgba(255, 239, 92, 0) 100%)",
        "halo-b-gradient": "radial-gradient(39.4% 77% at 70.6% 67.5%, #215f742e 0%, rgba(255, 239, 92, 0) 100%)",
        "temp-gradient": "radial-gradient(37.4% 50% at 75.5% 50%,rgba(255,239,92,.2) 0%,rgba(255,239,92,0) 100%)"
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16'
      },
      gridColumnEnd: {
        '16': '16',
        'none': 'none'
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '10': '10',
        '12': '12'
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))'
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
        drawBorder: {
          '0%': { backgroundSize: '0% 2px, 2px 0%, 0% 2px, 2px 0%' },
          '25%': { backgroundSize: '100% 2px, 2px 0%, 0% 2px, 2px 0%' },
          '50%': { backgroundSize: '100% 2px, 2px 100%, 0% 2px, 2px 0%' },
          '75%': { backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 0%' },
          '100%': { backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        appear: {
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'extend-line': {
          '0%': { width: '0' },
          '100%': { width: '30px' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'highlight-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        'ripple': {
          '0%': {
            r: '10',
            opacity: '1',
          },
          '100%': {
            r: '150',
            opacity: '0',
          },
        },
        'cursor-move': {
          '0%': { top: '0', left: '0', transform: 'translate(0, 0)' },
          '100%': { top: '10%', left: '60%', transform: 'translate(-50%, -50%)' },
        },
        'click-line': {
          '0%': {
            'stroke-dashoffset': '40',
            opacity: '1',
          },
          '100%': {
            'stroke-dashoffset': '0',
            opacity: '0',
          },
        },
        'cursor-click': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
        },
        'stream-right': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-30' }
        },
        'stream-left': {
          '0%': { strokeDashoffset: '-30' },
          '100%': { strokeDashoffset: '0' }
        },
        'draw-thunder': {
          '0%': { strokeDashoffset: '293.0159912109375' },
          '100%': { strokeDashoffset: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in-6y': {
          '0%, 83.33%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(15px)',
            fontSize: '14px',
            fill: '#ffffff',
            opacity: '1'
          }
        },
        'scale-in-6y2': {
          '0%, 83.33%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-18px)',
            fontSize: '14px',
            fill: '#ffffff',
            opacity: '1'
          }
        }
      },
      animation: {
        'thunder': 'draw-thunder 1s linear forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'conveyor': 'conveyor 60s linear infinite',
        moveDot: 'moveDot 0.25s linear forwards',
        moveLeftToMiddle: 'moveLeftToMiddle 1.2s linear 0.27s forwards',
        moveMiddleToRight: 'moveMiddleToRight 0.8s linear 1s forwards',
        moveRightDot: 'moveRightDot 0.2s linear 1.8s forwards',
        'draw-border': 'drawBorder 1s linear forwards',
        'draw-border-delayed': 'drawBorder 2s linear 2s forwards',
        'scroll': 'scroll 54.4s linear infinite',
        'appear': 'appear 1s forwards',
        'extend-line': 'extend-line 1s forwards',
        // 'fade-in': 'fade-in 0.5s forwards',
        'fade-in-delay': 'fade-in 0.5s forwards 2.5s',
        'extend-line-delay': 'extend-line 1s forwards 1.5s',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'highlight-pulse': 'highlight-pulse 1s ease-in-out infinite',
        ripple: 'ripple 1s ease-out forwards',
        'cursor-move': 'cursor-move 1s ease-in-out forwards',
        'click-line': 'click-line 0.5s ease-out forwards',
        'cursor-click': 'cursor-click 0.3s ease-in-out',
        'stream-right': 'stream-right 1s linear infinite',
        'stream-left': 'stream-left 1s linear infinite',
        'scale-in-1': 'scaleIn 0.3s ease-out forwards',
        'scale-in-2': 'scaleIn 0.3s ease-out 0.1s forwards',
        'scale-in-3': 'scaleIn 0.3s ease-out 0.2s forwards',
        'scale-in-4': 'scaleIn 0.3s ease-out 0.3s forwards',
        'scale-in-5': 'scaleIn 0.3s ease-out 0.4s forwards',
        'scale-in-6y': 'scale-in-6y 0.3s ease-out forwards',
        'scale-in-6y2': 'scale-in-6y2 0.3s ease-out forwards'
      },
      screens: {
        'xs': '480px',
        'x-390': '390px',
        'x-1440': '1440px',
        '3xl': '1600px',
        'h-sm': { 'raw': '(min-height: 640px) and (max-height: 767px) and (max-width: 932px)' },
        'h-md': { 'raw': '(min-height: 768px) and (max-height: 1023px) and (max-width: 932px)' },
        'h-lg': { 'raw': '(min-height: 1024px) and (max-height: 1279px) and (max-width: 932px)' },
        'h-xl': { 'raw': '(min-height: 1280px) and (max-height: 1535px) and (max-width: 932px)' },
        'h-2xl': { 'raw': '(min-height: 1536px) and (max-width: 800px)' },
      },
    },
  }
}
export default config
