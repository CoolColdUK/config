# ts-config for in typescript

this is ts config for typescript. the typescript version is at `5.1.6` for compatability reasons. contains @types/node@18 and ts-node

## Usage

```json
{
  // tsconfig.json
  "extends": "@coolcolduk/ts-config",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "baseUrl": "."
  },
  "include": ["src/**/*"],
  "exclude": ["dist"]
}

```
