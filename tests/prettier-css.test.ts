import { test, expect } from 'vitest';
import fs from 'fs/promises';
import prettier, { Options } from 'prettier';

import * as api from '../index';

test('Prettier CSS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/order-valid.css',
  };
  const [rawValidCSS, rawInvalidCSS] = await Promise.all([
    fs.readFile('tests/fixtures/order-valid.css', 'utf-8'),
    fs.readFile('tests/fixtures/order-invalid.css', 'utf-8'),
  ]);

  const prettierOkOnValidCSS = await prettier.check(rawValidCSS, config as Options);
  const prettierOkOnInvalidCSS = await prettier.check(rawInvalidCSS, config as Options);

  expect(prettierOkOnValidCSS).toBe(true);
  expect(prettierOkOnInvalidCSS).toBe(false);
});
