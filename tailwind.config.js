/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 120px rgba(11,182,255,0.18)',
      },
    },
  },
  plugins: [],
}

