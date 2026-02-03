# @coolcolduk/ts-config

Shared TypeScript base config for strict TypeScript projects. Single dependency; includes TypeScript, `ts-node`, and `@types/node`.

## Usage

Create or update `tsconfig.json` in your project:

```json
{
  "extends": "@coolcolduk/ts-config",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "baseUrl": "."
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

Override any `compilerOptions` or `include`/`exclude` as needed for your app.

## Included

- **TypeScript** (version provided by the package)
- **ts-node**
- **@types/node**

The preset uses strict options, ESNext modules, `moduleResolution: "bundler"`, and `target: "ES2022"`.
