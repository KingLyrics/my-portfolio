/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
        Roboto: ["Roboto Slab", "serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        orange: "#fca311",
        deepGray: "#e5e5e5",
        deepBlue: "#14213d",
      },
    },
  },
  plugins: [],
};
