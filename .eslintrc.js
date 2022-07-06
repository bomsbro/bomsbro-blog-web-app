module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-props-no-spreading": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};
