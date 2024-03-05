# jest-config for in typescript (include ts-jest)

this is jest config for typescript. It has the latest version of packages required so you only need to add one dependency instead of multiple dependencies.

The `*.test.ts` files are unit tests, while `*.spec.ts` are integration tests

## Usage

```json
{
  // various content in package.json
  "scripts": {
    "test": "jest",
    "test:int": "jest --testMatch **/*.spec.ts",
    "test:unit": "jest --testMatch **/*.test.ts"
  },
  "devDependencies": {
    "@coolcolduk/jest-config": "latest"
  },
  "jest": {
    "preset": "@coolcolduk/jest-config",
    "rootDir": "./src",
    // this is optional, and can override with other stuff
    "setupFiles": [
      "<rootDir>/setupTests.ts"
    ]
  }
}
```
