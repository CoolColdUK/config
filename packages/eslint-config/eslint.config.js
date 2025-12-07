/**
 * ESLint v9 Flat Config for packages
 * - based on airbnb typescript style
 * - use with prettier
 * @see https://stackoverflow.com/q/61963749/7058536
 */

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['**/__generated__/*.ts', '.eslintrc.js', 'dist', '/*.*', 'node_modules/**', 'build/**', 'coverage/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
    },
    rules: {
      // TypeScript ESLint recommended rules
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_'}],
      '@typescript-eslint/dot-notation': ['warn', {allowIndexSignaturePropertyAccess: true}],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Import rules (Airbnb-style)
      'import/prefer-default-export': 'off',
      'import/no-cycle': [2, {ignoreExternal: true}],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.*', '**/*.spec.*', '**/jest.config.*', '**/vite.config.*'],
        },
      ],

      // General rules (Airbnb-style)
      'no-console': 'warn',
      'no-await-in-loop': 'off',
      'class-methods-use-this': 'warn',
      'no-unused-vars': 'off', // Use TypeScript version instead

      // Prettier integration (must be last)
      ...prettierConfig.rules,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
