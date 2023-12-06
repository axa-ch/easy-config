const { test, expect } = await import('vitest');
const { ESLint } = require('eslint');

const api = require('../index');

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint JS config', async () => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.typescript],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
      },
    },
  });
  const [validResult, invalidResult] = await eslint.lintFiles([
    'tests/fixtures/valid-ts.ts',
    'tests/fixtures/invalid-ts.ts',
  ]);

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
