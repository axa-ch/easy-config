const { test, expect } = await import('vitest');
const stylelint = require('stylelint');

const api = require('../index');

const isLintResultValid = ({ errored, warnings }) => errored === false && warnings.length === 0;

test('Stylelint SCSS config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.scss],
    },
    files: ['tests/fixtures/valid.scss', 'tests/fixtures/invalid.scss'],
  });
  const [validResult, invalidResult] = results;
  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
