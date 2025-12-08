/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 主色調 - 溫柔的漸層藍紫色
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b8c9ff',
          400: '#8fa3ff',
          500: '#6b7fff',
          600: '#5563f5',
          700: '#4449d6',
          800: '#3838ad',
          900: '#2f2f87'
        },
        // 輔助色 - 甜美粉橘
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c'
        },
        // 成功/自然色 - 清新綠
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a'
        },
        // 玫瑰紅 - 溫暖
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c'
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', '"Noto Sans TC"', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: []
}
