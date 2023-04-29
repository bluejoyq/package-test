module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.base.json", "./packages/**/tsconfig.json"],
  },

  overrides: [
    {
      extends: ["plugin:react-hooks/recommended"],
      files: ["packages/core/**/*.ts?(x)", "packages/core/**/*.js?(x)","packages/example/**/*.ts?(x)", "packages/example/**/*.js?(x)"],
      plugins: ["react-refresh"],
      rules: {
        "react-refresh/only-export-components": "warn",
      },
    },
  ],
};
