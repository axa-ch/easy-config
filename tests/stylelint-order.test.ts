import { expect, test } from 'vitest';
import stylelint from 'stylelint';
import { isStyleLintValid, testRequire } from './helper.js';

const stylelintBase = testRequire.resolve('../stylelint/stylelint-base');
const stylelintOrder = testRequire.resolve('../stylelint/stylelint-order');

test('Stylelint Order config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [stylelintBase, stylelintOrder],
    },
    files: ['tests/fixtures/order-valid.css', 'tests/fixtures/order-invalid.css'],
  });
  const [validResult, invalidResult] = results;

  expect(isStyleLintValid(validResult)).toBe(true);
  expect(isStyleLintValid(invalidResult)).toBe(true);
});
