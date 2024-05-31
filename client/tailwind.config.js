/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightText": "#9B8AFB",
        "light": "#EBE9FE",
        "dark": "#6938EF",
        "inactive": "#667085",
        "back": "#F2F4F7",
        "checkBack": "#C3AFF9"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

