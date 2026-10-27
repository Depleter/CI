# CI

Simple profile website with a health check endpoint.

## Run

```bash
npm start
```

Then open `http://localhost:3000/`.

## Health check

`GET /health` returns:

```json
{"status":"ok"}
```

## Test

```bash
npm test
```
