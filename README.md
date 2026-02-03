# config

Shared configuration packages for TypeScript and JavaScript projects (ESLint, Jest, Prettier, TypeScript).

## Packages

| Package                                                           | Description                                 |
| ----------------------------------------------------------------- | ------------------------------------------- |
| [@coolcolduk/eslint-config](./packages/eslint-config)             | ESLint v9 flat config for Node/TypeScript   |
| [@coolcolduk/eslint-config-react](./packages/eslint-config-react) | ESLint v9 flat config for React/TypeScript  |
| [@coolcolduk/jest-config](./packages/jest-config)                 | Jest preset for TypeScript (ts-jest, ESM)   |
| [@coolcolduk/prettier-config](./packages/prettier-config)         | Prettier config and lint-staged/husky setup |
| [@coolcolduk/ts-config](./packages/ts-config)                     | Shared TypeScript base config               |

## Release

Versions are managed with Lerna. From the repo root:

- **Patch:** `npm run release:patch`
- **Minor:** `npm run release:minor`
- **Major:** `npm run release:major`

Publishing is handled by the GitHub Actions release workflow.
