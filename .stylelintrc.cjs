module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "stylelint-scss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "stylelint-config-standard-scss",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // code quality
    "no-console": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],

    // style consistency
    semi: ["error", "always"],
    quotes: ["error", "single"],

    // imports
    "import/no-unresolved": "off",
    // formatting
    "string-quotes": "single",
    "declaration-block-trailing-semicolon": "always",

    // SCSS specific
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9-]*)$",

    // allow BEM-like class naming
    "selector-class-pattern": null,
  },
};
