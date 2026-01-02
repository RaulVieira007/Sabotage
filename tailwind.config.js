/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: "#b11226",
        dark: "#0a0a0a",
      },
    },
  },
  plugins: [],
}
