/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    node: true,
    "shared-node-browser": true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:storybook/recommended"
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }],
    "@typescript-eslint/no-misused-promises": ["error", {
      checksVoidReturn: {
        attributes: false
      }
    }],
    "@typescript-eslint/no-empty-function": ["warn"],
    "no-mixed-spaces-and-tabs": ["off"],
    "no-console": ["warn"],
    eqeqeq: ["error", "always"]
  },
  ignorePatterns: ["node_modules/", "dist/"]
};

module.exports = config;