/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import plugin from 'tailwindcss-animated';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#217BF4',
        secondary: '#00FF29',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        break: '1280px',
      },
    },
  },
  plugins: [daisyui, plugin],
  daisyui: {
    themes: ['light'],
  },
};
