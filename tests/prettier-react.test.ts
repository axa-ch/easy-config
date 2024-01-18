import { test, expect } from 'vitest';
import fs from 'fs/promises';
import prettier, { Options } from 'prettier';

import * as api from '../index';

test('Prettier React config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'tests/fixtures/react-valid.jsx',
  };

  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/react-valid.jsx', 'utf-8'),
    fs.readFile('tests/fixtures/react-invalid.jsx', 'utf-8'),
  ]);

  const prettierOkOnValidReact = await prettier.check(rawValidVue, config as Options);
  const prettierOkOnInvalidReact = await prettier.check(rawInvalidVue, config as Options);

  expect(prettierOkOnValidReact).toBe(true);
  expect(prettierOkOnInvalidReact).toBe(false);
});
