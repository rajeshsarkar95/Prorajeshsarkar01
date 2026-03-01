import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'Segoe UI', 'system-ui', 'sans-serif'],
        dm: ['DM Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#16161f',
        },
        accent: {
          DEFAULT: '#6c63ff',
          violet: '#a78bfa',
          sky: '#38bdf8',
        },
        surface: 'rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6c63ff, #38bdf8)',
        'gradient-accent-full': 'linear-gradient(135deg, #6c63ff 0%, #38bdf8 50%, #a78bfa 100%)',
      },
      animation: {
        'float-slow': 'orbFloat 12s ease-in-out infinite',
        'float-med': 'orbFloat 16s ease-in-out infinite reverse',
        'float-fast': 'orbFloat 20s ease-in-out infinite',
        'float-tag': 'floatTag 4s ease-in-out infinite',
        'rotate-ring': 'rotateRing 20s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 1s ease both',
        'skill-fill': 'skillFill 1.5s cubic-bezier(0.22,0.61,0.36,1) both',
      },
      keyframes: {
        orbFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,30px) scale(0.95)' },
        },
        floatTag: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateRing: {
          to: { transform: 'rotate(360deg)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        skillFill: {
          from: { width: '0%' },
        },
      },
      boxShadow: {
        accent: '0 0 32px rgba(108,99,255,0.35)',
        'accent-sm': '0 0 12px rgba(108,99,255,0.3)',
        'glow-violet': '0 12px 40px rgba(167,139,250,0.2)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
