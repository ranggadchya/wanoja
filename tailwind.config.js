/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./pages/*.html"],
  theme: {
    container: {
      padding: '100px',
      true: center, 
    },
    fontFamily: {
      poppins: 'Poppins',
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#06283D",
        accent: "#256D85",
      },
    },
  },
  plugins: [],
};
