const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      black: "#0a0a09",
      blue: "#122aff",
      current: "currentColor",
      darkGrey: "#151515",
      grey: "#2f2e2e",
      lightGrey: "#838383",
      transparent: "transparent",
      white: "f4f8fa",
    },
  },
};
