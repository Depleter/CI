# Profile health check

A dependency-free profile website for Alex Morgan, with a client-side health
check that validates the profile content, contact link, and featured work.

## Run locally

Open `index.html` in a browser, or start the local server:

```bash
npm start
```

Then visit `http://localhost:3000`. The server has no runtime dependencies.

## Build

```bash
npm run build
```

This validates the static files and copies the production-ready site to
`dist/`.

## Test

```bash
npm test
```

The test suite uses Node's built-in test runner and covers both a healthy
profile and incomplete profile data.

## Continuous integration

GitHub Actions runs the `verify` workflow on pushes to `main` and on pull
requests. The workflow executes:

```bash
npm test
```