import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.config.*",
      "**/.stylelintrc.cjs",
    ],
  },
  {
    rules: {
      "eol-last": ["error", "always"],
    },
  },
];
