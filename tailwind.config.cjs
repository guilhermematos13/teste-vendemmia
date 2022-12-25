/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "320px"
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        "white-100": "#FAF9F5",
        "purple-900": "#422C76",
        "pink-800": "#FF2F69"
      }
    },
  },
  plugins: [],
};
