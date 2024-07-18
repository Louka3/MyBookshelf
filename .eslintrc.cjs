module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  plugins: ['react-refresh', "@typescript-eslint", "prettier"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    "prettier/prettier": ["error", {
      "semi": true,
      "useTabs": false,
      "tabWidth": 2
    }]
  },
}
