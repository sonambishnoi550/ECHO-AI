/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "lightgray": '#b3b2b6',
        "dark-black": "#01000B",

      },
      fontSize: {
        "custom-3xl": '32px',
        "custom-4xl": '34px',
      },
      lineHeight: {
        'custom-sm': '120%',
        'custom-xl': '150%',
       
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)",
      },
      borderImage: {
        gradient: "linear-gradient(103.52deg, #3A3EF5 18.99%, #32C8F1 82.34%)",
      },
    },
  },
  plugins: [],
}