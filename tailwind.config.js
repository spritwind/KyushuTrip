/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // 確保動態類名不被 purge
  safelist: [
    // 背景色 (含 hover variant)
    {
      pattern: /bg-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(50|100|200|300|400|500|600)/,
      variants: ['hover']
    },
    // 文字色
    { pattern: /text-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(400|500|600|700|800)/ },
    // 邊框色
    { pattern: /border-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(100|200|300|400|500)/ },
    // 漸變
    { pattern: /from-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(100|200|300|400)/ },
    { pattern: /to-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(100|200|300)/ },
    // Ring
    { pattern: /ring-(rose|teal|violet|amber|sky|orange|emerald|green|pink|purple|blue|red|yellow)-(200|300)/ },
  ],
  theme: {
    extend: {
      colors: {
        // Pastel Dream Palette
        primary: {
          50: '#fff0f5',   // Lavender Blush
          100: '#ffe1ec',  // Misty Rose
          200: '#ffc2da',  // Pink Lace
          300: '#ffa3c8',  // Carnation Pink
          400: '#ff85b6',  // Tickle Me Pink
          500: '#ff66a3',  // Hot Pink (Softened)
          600: '#e64d8a',
          700: '#cc3370',
          800: '#b3245c',
          900: '#991a4d'
        },
        // Minty Fresh
        success: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          500: '#14b8a6', // Teal
          600: '#0d9488'
        },
        // Warm Cream/Orange
        accent: {
          50: '#fff8ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c'
        },
        // Neutral Warm Greys
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', '"Quicksand"', 'ui-sans-serif', 'system-ui'],
        display: ['"M PLUS Rounded 1c"', '"Quicksand"', 'ui-sans-serif'],
        body: ['"Quicksand"', '"M PLUS Rounded 1c"', 'ui-sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        'pill': '9999px',
      },
      boxShadow: {
        'cute': '0 4px 14px 0 rgba(255, 102, 163, 0.25)',
        'cute-hover': '0 6px 20px rgba(255, 102, 163, 0.4)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-2%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        }
      }
    }
  },
  plugins: []
}
