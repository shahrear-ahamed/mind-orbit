import eslint from "@eslint/js"
import { tanstackConfig } from "@tanstack/eslint-config"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/node_modules/**",
      "**/*.gen.ts",
      "**/_generated/**",
      "**/routeTree.gen.ts",
      "**/.output/**",
      "**/.nitro/**",
      "**/.tanstack/**",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tanstackConfig,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.*", "*.mjs", "*.js"],
        },
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "off", // Handled by typescript
    },
  }
)
