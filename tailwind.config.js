/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nasalization: "nasalization",
        expressway: "expressway",
        navine: "navine",
      },
    },
  },
  plugins: [
            require("flowbite/plugin")
  ],
};