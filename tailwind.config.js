// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      // You can add your custom shadows or other theme extensions here
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      },
    },
  },
  plugins: [],
}
