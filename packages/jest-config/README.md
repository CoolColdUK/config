# @coolcolduk/jest-config

Jest preset for TypeScript with ts-jest and ESM support. Single dependency for consistent test setup across projects.

## Conventions

- `*.test.ts` — unit tests
- `*.spec.ts` — integration tests

You can split scripts by using different Jest configs or `--testPathPattern`.

## Usage

Add to `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testPathPattern=\\.test\\.ts$",
    "test:int": "jest --testPathPattern=\\.spec\\.ts$"
  },
  "devDependencies": {
    "@coolcolduk/jest-config": "latest"
  },
  "jest": {
    "preset": "@coolcolduk/jest-config",
    "rootDir": "./src",
    "testMatch": ["**/*.test.ts", "**/*.test.tsx"],
    "setupFiles": ["<rootDir>/setupTests.ts"]
  }
}
```

Override any preset option (e.g. `rootDir`, `testMatch`, `setupFiles`) in your project’s `jest` block as needed.

## Preset behaviour

- **ts-jest** with ESM
- **testEnvironment:** `node`
- **collectCoverage:** `true`, output in `coverage/`
- **passWithNoTests:** `true`
- **moduleDirectories:** `['node_modules', 'src']`
- **modulePathIgnorePatterns:** `['<rootDir>/endpoints']`
