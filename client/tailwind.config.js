/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#FFE9FD",
        secondary: "#8A0080",
        orange: "#FF3D00",
        blue: "#000060",
        lightpink: "#F9F6F8",
        gray: "#F9F6F8",
      },
    },
  },
  plugins: [],
};
