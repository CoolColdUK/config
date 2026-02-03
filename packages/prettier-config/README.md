# @coolcolduk/prettier-config

Shared Prettier config for TypeScript/JavaScript projects. Optionally used with `lint-staged` and `husky` for format-on-commit (you install and configure those in your app).

## Usage

Reference the config in `package.json`:

```json
{
  "prettier": "@coolcolduk/prettier-config",
  "scripts": {
    "format": "prettier --ignore-unknown --write \"**/*.{ts,tsx,js,jsx,json}\""
  },
  "devDependencies": {
    "@coolcolduk/prettier-config": "latest"
  }
}
```

### With lint-staged and Husky

To run Prettier on staged files before commit, add `lint-staged` and `husky` in your project, then:

```json
{
  "prettier": "@coolcolduk/prettier-config",
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["prettier --write --ignore-unknown"],
    "package.json": ["prettier-package-json --write"]
  }
}
```

Install and enable Husky, then in the pre-commit hook run `npx lint-staged`. The package does not install or configure Husky for you.

## Config summary

- **printWidth:** 120
- **tabWidth:** 2
- **singleQuote:** true
- **trailingComma:** "all"
- **endOfLine:** "lf"
