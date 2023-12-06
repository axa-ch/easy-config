const { test, expect } = await import('vitest');
const fs = require('fs').promises;
const prettier = require('prettier');

const api = require('../index');

test('Prettier JS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/valid-ts.ts',
  };

  const [rawValidJS, rawInvalidJS] = await Promise.all([
    fs.readFile('tests/fixtures/valid-ts.ts', 'utf-8'),
    fs.readFile('tests/fixtures/invalid-ts.ts', 'utf-8'),
  ]);

  const prettierOkOnValidJS = await prettier.check(rawValidJS.toString(), config);
  const prettierOkOnInvalidJS = await prettier.check(rawInvalidJS.toString(), config);
  expect(prettierOkOnValidJS).toBe(true);
  expect(prettierOkOnInvalidJS).toBe(false);
});
