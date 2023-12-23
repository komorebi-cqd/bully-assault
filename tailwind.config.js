/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "main": "#0CAF60", //主要的颜色
        "minor": "rgba(164,168,171,1)", //次要的颜色
        "mainBgC": "rgba(18,24,31,1)", //主要背景
        "minorBgC": "#161D26",
        "onsurface": "#1F1F2C"
      },
      maxWidth: {
        96: "1230px"
      }
    },
    screens: {
      "xs": "0px",
      "sm": "600px",
      "md": "900px",
      "lg": "1200px",
      "xl": "1536px",
    }
  },
  plugins: [],
}