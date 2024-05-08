/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "hsl(12, 88%, 59%)",
          200: "hsl(228, 39%, 23%)",
        },
        neutral: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(13, 100%, 96%)",
          300: "hsl(227, 12%, 61%)",
          400: "hsl(233, 12%, 13%)",
        },
      },
    },
  },
  plugins: [],
}
