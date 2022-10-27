module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "left-draw": "left-draw 0.5s ease-in-out",
      },
      keyframes: {
        "left-draw": {
          "0%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
