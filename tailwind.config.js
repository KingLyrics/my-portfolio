/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
        Roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
