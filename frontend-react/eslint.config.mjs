import { defineConfig, globalIgnores } from "eslint/config"
import { fixupConfigRules } from "@eslint/compat"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(["**/.gitignore"]),
  {
    extends: [
      ...fixupConfigRules(
        compat.extends(
          "plugin:react/recommended",
          "plugin:react/jsx-runtime",
          "plugin:react-hooks/recommended",
          "plugin:prettier/recommended",
        ),
      ),
      eslint.configs.recommended,
      tseslint.configs.recommended,
    ],
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
])
