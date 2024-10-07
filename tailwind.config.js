/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        untblue: {
          light: "#4f76c0",
          DEFAULT: "#3159a6",
          dark: "#243f7d",
        },
        untbrown: {
          light: "#e6b868",
          DEFAULT: "#cc9831",
          dark: "#a37726",
        },
      },
    },
  },
  plugins: [],
};
