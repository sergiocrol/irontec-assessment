require("dotenv").config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  purge: {
    enabled: enablePurge,
    content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.scss"],
  },
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
        1.2: "1.2rem",
      },
      maxWidth: {
        "40-p": "40%",
        "50-p": "50%",
        "60-p": "60%",
        "80-p": "80%",
        "90-p": "90%",
        2: "3rem",
      },
      minWidth: {
        10: "2.5rem",
        15: "3.5rem",
        "50-p": "50%",
      },
      minHeight: {
        10: "2.5rem",
        15: "3.5rem",
        47: "47rem",
      },
      height: {
        1.5: "1.5rem",
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
