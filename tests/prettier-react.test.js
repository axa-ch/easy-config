import fs from 'fs/promises';
import prettier from 'prettier';
import { test, expect } from 'vitest';
import * as api from '../index.js';

test('Prettier React config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'tests/fixtures/react-valid.jsx',
  };

  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/react-valid.jsx'),
    fs.readFile('tests/fixtures/react-invalid.jsx'),
  ]);

  const prettierOkOnValidReact = await prettier.check(rawValidVue.toString(), config);
  const prettierOkOnInvalidReact = await prettier.check(rawInvalidVue.toString(), config);

  expect(prettierOkOnValidReact).toBe(true);
  expect(prettierOkOnInvalidReact).toBe(false);
});
