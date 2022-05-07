module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        imports: "never",
        exports: "never",
        functions: "never",
        arrays: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "space-before-function-paren": ["error", "never"],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
};
