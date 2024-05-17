/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#217BF4',
        secondary: '#00FF29',
        'gray-custom': '#656464',
        'blue-custom': '#192A68',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        break: '1280px',
      },
    },
  },
  plugins: [],
};
