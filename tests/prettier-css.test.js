import fs from 'fs/promises';
import prettier from 'prettier';

import * as api from '../index.js';
import { test, expect } from 'vitest';

test('Prettier CSS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/order-valid.css',
  };
  const [rawValidCSS, rawInvalidCSS] = await Promise.all([
    fs.readFile('tests/fixtures/order-valid.css'),
    fs.readFile('tests/fixtures/order-invalid.css'),
  ]);

  const prettierOkOnValidCSS = await prettier.check(rawValidCSS.toString(), config);
  const prettierOkOnInvalidCSS = await prettier.check(rawInvalidCSS.toString(), config);
  expect(prettierOkOnValidCSS).toBe(true);
  expect(prettierOkOnInvalidCSS).toBe(false);
});
