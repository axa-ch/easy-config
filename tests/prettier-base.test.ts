import { test, expect } from 'vitest';
import fs from 'fs/promises';
import prettier, { Options } from 'prettier';

import * as api from '../index';

test('Prettier JS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/valid-ts.ts',
  };

  const [rawValidJS, rawInvalidJS] = await Promise.all([
    fs.readFile('tests/fixtures/valid-ts.ts', 'utf-8'),
    fs.readFile('tests/fixtures/invalid-ts.ts', 'utf-8'),
  ]);

  const prettierOkOnValidJS = await prettier.check(rawValidJS.toString(), config as Options);
  const prettierOkOnInvalidJS = await prettier.check(rawInvalidJS.toString(), config as Options);
  expect(prettierOkOnValidJS).toBe(true);
  expect(prettierOkOnInvalidJS).toBe(false);
});
