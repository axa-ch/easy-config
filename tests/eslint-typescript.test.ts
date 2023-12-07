import { test, expect } from 'vitest';
import { ESLint } from 'eslint';

import * as api from '../index';
import { isEsLintResultValid, testRequire } from './helper.js';

const eslintTypescript = testRequire.resolve("../eslint/eslint-typescript.json");

test('ESLint JS config', async () => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [eslintTypescript],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
      },
    },
  });
  const [validResult, invalidResult] = await eslint.lintFiles([
    'tests/fixtures/valid-ts.ts',
    'tests/fixtures/invalid-ts.ts',
  ]);

  expect(isEsLintResultValid(validResult)).toBe(true);
  expect(isEsLintResultValid(invalidResult)).toBe(false);
});
