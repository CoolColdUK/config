# eslint-config for nodejs in typescript

this is eslint config for node js. It has the latest version of packages required so you only need to add one dependency instead of multiple eslint dependencies.

## Usage

```json
{
  // various content in package.json
  "scripts": {
    "lint": "eslint ./src/**/*.{ts,tsx}",
    "lint:fix": "eslint --fix ./src/**/*.{ts,tsx}"
  },
  "devDependencies": {
    "@coolcolduk/eslint-config": "latest"
  },
  "eslintConfig": {
    "extends": [
      "@coolcolduk/eslint-config"
    ]
  },
}
```
