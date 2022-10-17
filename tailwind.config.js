const tempAspectRatioPlugin = require('@tailwindcss/aspect-ratio');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './components/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tempAspectRatioPlugin,
  ],
  corePlugins: {
    aspectRatio: false,
  },
};
