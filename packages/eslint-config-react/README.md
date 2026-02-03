# @coolcolduk/eslint-config-react

ESLint v9 flat config for React and TypeScript projects. Single dependency; includes React, React Hooks, JSX A11y, TypeScript, and Prettier integration (Airbnb-style base).

## Usage

ESLint v9 uses the flat config format. The `package.json` `eslintConfig` field is not supported.

Create `eslint.config.js` in your project root:

```js
import reactConfig from '@coolcolduk/eslint-config-react';

export default [
  ...reactConfig,
  // Add project-specific overrides here
];
```

CommonJS (legacy):

```js
const reactConfig = require('@coolcolduk/eslint-config-react');

module.exports = [
  ...reactConfig,
  // Add project-specific overrides here
];
```

Add to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ./src/**/*.{ts,tsx}",
    "lint:fix": "eslint --fix ./src/**/*.{ts,tsx}"
  },
  "devDependencies": {
    "@coolcolduk/eslint-config-react": "latest"
  }
}
```

## Features

- Airbnb-style TypeScript rules
- React and React Hooks rules
- JSX A11y accessibility rules
- Prettier integration (no conflicting rules)
- TypeScript support and import resolver
- Ignores: `dist`, `node_modules`, `coverage`, `build`
