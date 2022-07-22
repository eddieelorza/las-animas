/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary':"#653b66",
      'secondary':"#FEC7FF",
      'tertiary':"#B279B3",
      'green':"#456631",
      'green-light':"#8fb379",
      'gray': colors.gray,
      'white': colors.white,
      'black': colors.black,

      amber: colors.amber,
      emerald: colors.emerald,
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}