const { test, expect } = await import('vitest');
const { ESLint } = require('eslint');

const api = require('../index');

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint Typescript React config', async () => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.react, api.eslint.typescript],
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

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
