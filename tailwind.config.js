/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      fontSize: {
        xxs: [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#06283D",
        accent: "#256D85",
      },
      gridTemplateColumns: {
        footer: "150px minmax(0, 1fr)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
