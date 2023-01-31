/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      colors: {
        light_gray: "#98c1d9",
        brand_orange: "#ee6c4d",
      }
    },
  },
  plugins: [],
}
