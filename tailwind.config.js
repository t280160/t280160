/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#407cf4",
      },
      boxShadow: {
        default: "0 0 10px 0 rgba(0, 0, 0, 0.18)",
        "default-2": "0 0 0px 2px rgba(0, 0, 0, 0.18)",
      },
      boxShadowColor: {
        primary: "#407cf4",
      },
      spacing: {
        100: 100 / 4 + "rem",
        120: 120 / 4 + "rem",
      },
      backgroundColor: {
        f9: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
