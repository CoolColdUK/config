# @coolcolduk/ts-config

Shared TypeScript 6 base config for strict TypeScript projects. Single dependency; includes TypeScript, `ts-node`, and `@types/node` (Node 24).

## Usage

Create or update `tsconfig.json` in your project:

```json
{
  "extends": "@coolcolduk/ts-config",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

Override any `compilerOptions` or `include`/`exclude` as needed for your app.

If you need Jest globals (`describe`, `it`, etc.), add them to `types`:

```json
{
  "compilerOptions": {
    "types": ["node", "jest"]
  }
}
```

For path aliases, use `paths` with full prefixes (do not use deprecated `baseUrl`):

```json
{
  "compilerOptions": {
    "paths": {
      "@app/*": ["./src/app/*"]
    }
  }
}
```

## Included

- **TypeScript** 6 (version provided by the package)
- **ts-node**
- **@types/node** 24

The preset uses strict options, ESNext modules, `moduleResolution: "bundler"`, `target: "ES2022"`, and `types: ["node"]` (required in TypeScript 6, which defaults `types` to `[]`).
