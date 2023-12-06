const { test, expect } = await import('vitest');
const stylelint = require('stylelint');

const api = require('../index');

const isLintResultValid = ({ errored, warnings }) => errored === false && warnings.length === 0;

test('Stylelint Order config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.order],
    },
    files: ['tests/fixtures/order-valid.css', 'tests/fixtures/order-invalid.css'],
  });
  const [validResult, invalidResult] = results;

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(true);
});
