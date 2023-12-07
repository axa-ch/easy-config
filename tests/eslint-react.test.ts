import { test, expect } from 'vitest';
import { ESLint } from 'eslint';

import * as api from "../index";
import { isEsLintResultValid, testRequire } from './helper.js';

const eslintBase = testRequire.resolve("../eslint/eslint-base.json");
const eslintReactConfig = testRequire.resolve("../eslint/eslint-react.json");

test('ESLint React config', async () => {
  const eslintReact = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [eslintBase, eslintReactConfig],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
        'import/no-unresolved': 'off',
      },
    },
  });

  const [validResult, invalidResult] = await eslintReact.lintFiles([
    'tests/fixtures/react-valid.jsx',
    'tests/fixtures/react-invalid.jsx',
  ]);

  expect(isEsLintResultValid(validResult)).toBe(true);
  expect(isEsLintResultValid(invalidResult)).toBe(false);
});
