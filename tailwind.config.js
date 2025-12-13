/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // We can add custom colors here later for scalability
      colors: {
        'primary': '#0f172a', // A nice dark blue/slate background
        'accent': '#38bdf8', // A bright sky blue for highlights
      }
    },
  },
  plugins: [],
}