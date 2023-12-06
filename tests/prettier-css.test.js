const { test, expect } = await import('vitest');
const fs = require('fs').promises;
const prettier = require('prettier');

const api = require('../index');

test('Prettier CSS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/order-valid.css',
  };
  const [rawValidCSS, rawInvalidCSS] = await Promise.all([
    fs.readFile('tests/fixtures/order-valid.css', 'utf-8'),
    fs.readFile('tests/fixtures/order-invalid.css', 'utf-8'),
  ]);

  const prettierOkOnValidCSS = await prettier.check(rawValidCSS, config);
  const prettierOkOnInvalidCSS = await prettier.check(rawInvalidCSS, config);

  expect(prettierOkOnValidCSS).toBe(true);
  expect(prettierOkOnInvalidCSS).toBe(false);
});
