module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPrimary: "#1F2937",
        darkSecondary: "#3f526b",
        darkTertiary: "#5f6c7c",
        lightPrimary: "#F2F6FF",
        greyPrimary: "#4B4A4A",
        primary: "#AA3451",
        primaryHover: "#d15b78",
        secondary: "#359969",
      },
      fontFamily: {
        sans: ["Lato", "Sans-serif"],
        montserrat: ["Montserrat", "Sans-serif"],
      },
      fontSize: {
        10: "0.625rem",
      },
      maxWidth: {
        "60-p": "60%",
        "80-p": "80%",
        "90-p": "90%",
        2: "3rem",
      },
      minWidth: {
        10: "2.5rem",
        15: "3.5rem",
      },
      minHeight: {
        10: "2.5rem",
        15: "3.5rem",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
