/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#1D1B27",
          secondary: "#322f3e",
          accent: "#F8E03E",
          "secondary-purple": "#5601C4",
          // neutral: "#2b3440",
          // "base-100": "#ffffff",
          // info: "#3abff8",
          // success: "#36d399",
          // warning: "#fbbd23",
          // error: "#f87272",
        },
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#fdfdfd",
          secondary: "#f2f2f2",
          accent: "#F8E03E",
          "secondary-purple": "#5601C4",

          // neutral: "#2b3440",
          // "base-100": "#ffffff",
          // info: "#3abff8",
          // success: "#36d399",
          // warning: "#fbbd23",
          // error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
