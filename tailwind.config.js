/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          900: '#312e81',
          800: '#3730a3',
          700: '#4338ca',
          600: '#4f46e5',
          500: '#6366f1',
          100: '#e0e7ff',
          50: '#eef2ff'
        },
        amber: {
          500: '#f59e0b',
          400: '#fbbf24',
          600: '#d97706'
        },
        rose: {
          500: '#f43f5e',
          100: '#ffe4e6',
          600: '#e11d48'
        },
        emerald: {
          600: '#059669'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
