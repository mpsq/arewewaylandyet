const path = require("path")

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "babel", "prettier", "standard"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-explicit-any": "off",
    "quote-props": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  },
}
