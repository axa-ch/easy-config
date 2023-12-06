const { test, expect } = await import('vitest');
const fs = require('fs').promises;
const prettier = require('prettier');

const api = require('../index');

test('Prettier React config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'tests/fixtures/react-valid.jsx',
  };

  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/react-valid.jsx', 'utf-8'),
    fs.readFile('tests/fixtures/react-invalid.jsx', 'utf-8'),
  ]);

  const prettierOkOnValidReact = await prettier.check(rawValidVue, config);
  const prettierOkOnInvalidReact = await prettier.check(rawInvalidVue, config);

  expect(prettierOkOnValidReact).toBe(true);
  expect(prettierOkOnInvalidReact).toBe(false);
});
