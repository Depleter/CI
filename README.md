# Profile health check

A dependency-free profile website for Alex Morgan, with a client-side health
check that validates the profile content, contact link, and featured work.

## Run locally

Open `index.html` in a browser. The page has no build step or runtime
dependencies.

## Test

```bash
npm test
```

The test suite uses Node's built-in test runner and covers both a healthy
profile and incomplete profile data.