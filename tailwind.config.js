/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': '470px', // 2 col
        'sm': '690px',  // 3 col
        'md': '850px',  // 4 col
        'lg': '970px', // 5 col
        'xl': '1200px',  // 6 col
        '2xl': '1536px', // 7 col
      },
    },
  },
  plugins: [],
}

