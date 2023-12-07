import { test, expect } from 'vitest';
import { ESLint } from 'eslint';

import * as api from "../index";
import { isEsLintResultValid, testRequire } from './helper.js';
const eslintReactConfig = testRequire.resolve("../eslint/eslint-react.json");
const eslintTypescript = testRequire.resolve("../eslint/eslint-typescript.json");

test('ESLint Typescript React config', async () => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [eslintReactConfig, eslintTypescript],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
        'no-use-before-define': 'off',
      },
    },
  });
  const [validResult, invalidResult] = await eslint.lintFiles([
    'tests/fixtures/react-valid-ts.tsx',
    'tests/fixtures/react-invalid-ts.tsx',
  ]);

  expect(isEsLintResultValid(validResult)).toBe(true);
  expect(isEsLintResultValid(invalidResult)).toBe(false);
});
