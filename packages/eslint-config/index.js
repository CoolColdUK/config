/**
 * Config for packages
 * - based on airbnb typescript
 * - use with prettier
 * @see https://stackoverflow.com/q/61963749/7058536
 */
module.exports = {
  //required!; use the previously installed parser; it allows ESLint to understand
  //TypeScript syntax; it converts TypeScript into an ESTree-compatible form so it
  //can be used in ESLint
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', //required for "type-aware linting"
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-await-in-loop': 'off',
    'class-methods-use-this': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/dot-notation': ['warn', {allowIndexSignaturePropertyAccess: true}],
    'import/no-cycle': [2, {ignoreExternal: true}], // can disable due to high computational cost
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['**/__generated__/*.ts', '.eslintrc.js', 'dist', '/*.*'],
};
