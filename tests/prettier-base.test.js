const fs = require('fs').promises;
import prettier from 'prettier';

import * as api from '../index.js';
import { expect, test } from 'vitest';

test('Prettier JS config', async () => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/valid-ts.ts',
  };

  const [rawValidJS, rawInvalidJS] = await Promise.all([
    fs.readFile('tests/fixtures/valid-ts.ts'),
    fs.readFile('tests/fixtures/invalid-ts.ts'),
  ]);

  const prettierOkOnValidJS = await prettier.check(rawValidJS.toString(), config);
  const prettierOkOnInvalidJS = await prettier.check(rawInvalidJS.toString(), config);
  expect(prettierOkOnValidJS).toBe(true);
  expect(prettierOkOnInvalidJS).toBe(false);
});
