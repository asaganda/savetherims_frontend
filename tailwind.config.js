/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      color: {
        "light_gray": "#98c1d9"
      }
    },
  },
  plugins: [],
}
