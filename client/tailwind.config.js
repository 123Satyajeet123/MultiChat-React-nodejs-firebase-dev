/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Just In Time compiler
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'./index.html'], // files to scan for class names
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-blue': '#7289da',
      'blue':'#99aab5',
      'dark-gray': '#23272a',
      'gray': '#2c2f33',
      'white':'#ffffff'
    },
    extend: {},
  },
  plugins: [],
}