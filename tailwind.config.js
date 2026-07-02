/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "monospace"],
      },
      colors: {
        "theme-black": "#212529",
        "theme-white": "#F5F7F8",
        "theme-yellow": "#FBF8CCd0",
        "theme-purple": "#CFBAF0d0",
        "theme-blue": "#90DBF4d0",
        "theme-green": "#B9FBC0d0",
        "theme-pink": "#FF85A1d0",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
