/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Abyss: "#031217",
        Ocean: "#19292f",
        Gray: "#8d9a9d",
        Sky:"#5d828b"
      },
    },
  },
  plugins: [],
};
