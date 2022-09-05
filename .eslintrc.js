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
    "plugin:react/recommended",
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-props-no-spreading": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", "json"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: [
    "build/**",
    "dist/**",
    "node_modules/",
    "tsconfig.paths.json",
    ".eslintrc.js",
    "craco.config.js",
    ".next",
  ],
};
