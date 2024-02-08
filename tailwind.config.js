/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ['Pokemon Solid','Urbanist'],
        'sans': ['Urbanist', 'sans-serif']

      }
    },
  },
  plugins: [require("daisyui")],
}

