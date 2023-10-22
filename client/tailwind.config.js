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
        primary2: "#8A0080",
        secondary: "#8A0080",
        orange: "#FF3D00",
      },
    },
  },
  plugins: [],
};
