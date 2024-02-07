/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        100:'25rem',
        110:'28rem'
      },
      width:{
        50:'30rem',
        60:'30rem',
        30:'15rem'
      }
    },
  },
  plugins: [],
}

