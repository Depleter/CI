const test = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('../server');

test('GET /health returns ok', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));

  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { status: 'ok' });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
