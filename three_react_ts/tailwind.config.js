/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-25': '#EFE6E6',
      },
      // backgroundImage: (theme)=> ({
      //   "gradient-yellowed": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home":"url(./assets/HomePageGraphic.png)"
      // }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      // content: {// for ::before, ::after,
      //   evolvetext: "url(./assets/Evolvetext.png)",
      // },
    },
  },
  plugins: [],
}