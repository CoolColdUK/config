# prettier-config for in typescript (include prettier-package-json, lint-staged and husky)

this is prettier config for typescript. This includes prettier-package-json, husky and lint-staged

## Usage

```json
{
  // various content in package.json
  "scripts": {
    "format": "prettier --ignore-unknown --write ./packages/**/*.{ts,tsx}"
  },
  "devDependencies": {
    "@coolcolduk/prettier-config": "latest"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --write --ignore-unknown"
    ],
    "package.json": "prettier-package-json --write"
  },
  "prettier": "@coolcolduk/prettier-config"
}
```
