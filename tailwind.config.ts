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
        bg: {
          DEFAULT: '#101214',
          elevated: '#171a1d',
          soft: '#1f2428',
        },
        line: {
          DEFAULT: 'rgba(244, 239, 230, 0.12)',
          strong: 'rgba(244, 239, 230, 0.2)',
        },
        text: {
          DEFAULT: '#f4efe6',
          muted: '#b8b0a3',
        },
        teal: {
          DEFAULT: '#7bb8a8',
          rgb: '123, 184, 168',
        },
        amber: {
          DEFAULT: '#d6a06b',
          rgb: '214, 160, 107',
        },
        coral: {
          DEFAULT: '#d97a61',
          rgb: '217, 122, 97',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'Arial', 'sans-serif'],
        mono: ['Consolas', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        'content': '1180px',
      },
      animation: {
        'hero-pulse': 'heroPulse 7s ease-in-out infinite',
        'hero-pulse-reverse': 'heroPulse 9s ease-in-out infinite reverse',
        'hero-float': 'heroCardFloat 6.8s ease-in-out infinite',
        'orbit': 'orbitSpin 18s linear infinite',
        'orbit-reverse': 'orbitSpinReverse 14s linear infinite',
        'ring-pulse': 'ringPulse 5.4s ease-in-out infinite',
        'badge-drift': 'badgeDrift 7s ease-in-out infinite',
        'stat-lift': 'statLift 8s ease-in-out infinite',
        'prism': 'prismShift 10s ease-in-out infinite',
      },
      keyframes: {
        heroPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.14)', opacity: '1' },
        },
        heroCardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        orbitSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        orbitSpinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        ringPulse: {
          '0%, 100%': { transform: 'scale(0.98)', opacity: '0.72' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
        badgeDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        statLift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        prismShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
