const {ESLint} = require('eslint')
const api = require('../index')
const {expect, test} =  require('vitest');

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint JS config', async (assert) => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.base],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
      },
    },
  });
  const [validResult, invalidResult] = await eslint.lintFiles(['tests/fixtures/valid.js', 'tests/fixtures/invalid.js']);

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false)
});
