const { url } = require("inspector")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#038885",
        "primary-100": "#dbdbd4",
        secondary: "#30332A",
        main: "#000000",
        sub: "#000000",
        light: "#F5F5F5",
        red: "#D31717"
      },
      fontFamily: {
        // inter: ["Inter", "san-serif"],
        // biro: ["var(--font-biro)", "san-serif"],
        // marcellus: ["Marcellus", "san-serif"],
        // gothic: ["var(--font-gothic)", "san-serif"],
        montserrat: ["Montserrat", "san-serif"],
        merriweather: ["Merriweather", "san-serif"]
      },
    },
    screens: {
      xs: "428px",
      ...defaultTheme.screens,
    },
  },

  plugins: [],
}
