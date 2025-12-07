# eslint-config-react for react projects in typescript

This is ESLint v9 flat config for React projects. It has the latest version of packages required so you only need to add one dependency instead of multiple eslint dependencies.

## Usage

**Important:** ESLint v9 uses flat config format and no longer supports `package.json` `eslintConfig` field.

Create an `eslint.config.js` file in your project root:

```js
import reactConfig from '@coolcolduk/eslint-config-react';

export default [
  ...reactConfig,
  // Add your project-specific overrides here if needed
];
```

Or if you're using CommonJS (legacy):

```js
const reactConfig = require('@coolcolduk/eslint-config-react');

module.exports = [
  ...reactConfig,
  // Add your project-specific overrides here if needed
];
```

Then add to your `package.json`:

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

- Based on Airbnb TypeScript style
- React and React Hooks support
- JSX A11y accessibility rules
- Prettier integration
- TypeScript support
- Import resolution with TypeScript paths
