module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rtl: {
      direction: "rtl",
    },
    extend: {
      animation: {
        "left-draw": "left-draw 0.3s ease-in-out both",
        "bottom-draw": "bottom-draw 0.3s ease-in-out both",
        "title-appear": "title-appear 0.3s ease-in-out both",
      },
      keyframes: {
        "left-draw": {
          "0%": { transform: "translateX(-100%)" },
        },
        "bottom-draw": {
          "0%": { transform: "translateY(100%)" },
        },
        "title-appear": {
          "0%": { opacity: 0 },
          "25%": { opacity: 0.25 },
          "50%": { opacity: 0.5 },
          "75%": { opacity: 0.75 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
