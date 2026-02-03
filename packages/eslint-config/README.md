# @coolcolduk/eslint-config

ESLint v9 flat config for Node.js and TypeScript projects. Single dependency; includes TypeScript parser, import resolver, and Prettier integration (Airbnb-style base).

## Usage

ESLint v9 uses the flat config format. The `package.json` `eslintConfig` field is not supported.

Create `eslint.config.js` in your project root:

```js
import baseConfig from '@coolcolduk/eslint-config';

export default [
  ...baseConfig,
  // Add project-specific overrides here
];
```

CommonJS (legacy):

```js
const baseConfig = require('@coolcolduk/eslint-config');

module.exports = [
  ...baseConfig,
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
    "@coolcolduk/eslint-config": "latest"
  }
}
```

## Features

- Airbnb-style TypeScript rules
- Prettier integration (no conflicting rules)
- TypeScript support and import resolver
- Ignores: `dist`, `node_modules`, `coverage`, `build`, `__generated__`
