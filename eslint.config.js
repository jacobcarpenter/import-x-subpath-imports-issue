import js from "@eslint/js";
import { importX } from "eslint-plugin-import-x";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    rules: {
      "import-x/no-relative-parent-imports": "error",
    },
  },
];
