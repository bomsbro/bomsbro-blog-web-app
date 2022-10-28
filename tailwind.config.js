module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "left-draw": "left-draw 0.3s ease-in-out both",
        "bottom-draw": "bottom-draw 0.3s ease-in-out both",
      },
      keyframes: {
        "left-draw": {
          "0%": { transform: "translateX(-100%)" },
        },
        "bottom-draw": {
          "0%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
