/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        vigPrimary: "#4C6EF5",
        vigAccent: "#A259FF",
        vigBg: "#FFFFFF",
        vigGlass: "rgba(255,255,255,0.12)",
        vigDark: "#0E0E10"
      },
      borderRadius: {
        xl: "16px"
      }
    }
  },
  plugins: []
}
