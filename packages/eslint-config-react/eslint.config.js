/**
 * ESLint v9 Flat Config for React
 * - based on airbnb typescript style
 * - use with prettier
 */

const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierConfig = require('eslint-config-prettier');

module.exports = async () => {
  const globals = await import('globals');
  return [
    {
      ignores: ['.eslintrc.js', 'dist', '/*.*', 'node_modules/**', 'build/**', 'coverage/**'],
    },
    {
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
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
          ...globals.default.browser,
          ...globals.default.jest,
          ...globals.default.es2021,
        },
      },
      plugins: {
        '@typescript-eslint': typescriptEslint,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        import: importPlugin,
        'jsx-a11y': jsxA11yPlugin,
      },
      rules: {
        // TypeScript ESLint rules
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/dot-notation': ['warn', {allowIndexSignaturePropertyAccess: true}],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // React rules
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.tsx', '.jsx'],
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-duplicate-props': ['warn', {ignoreCase: false}],
        'react/prop-types': 'off', // Using TypeScript for prop validation
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',

        // React Hooks rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // JSX A11y rules (key accessibility rules)
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',

        // Import rules (Airbnb-style)
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*', '**/.storybook/**/*.*'],
            peerDependencies: true,
          },
        ],

        // General rules (Airbnb-style)
        'no-console': 'warn',
        'no-await-in-loop': 'off',
        'no-unused-vars': 'off', // Use TypeScript version instead

        // Prettier integration (must be last)
        ...prettierConfig.rules,
      },
      settings: {
        react: {
          version: 'detect',
        },
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
};
