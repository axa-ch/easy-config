import { test, expect } from 'vitest';
import stylelint from 'stylelint';

import * as api from '../index.js';

const isLintResultValid = ({ errored, warnings }) => errored === false && warnings.length === 0;

test('Stylelint Order config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.order],
    },
    files: ['tests/fixtures/order-valid.css', 'tests/fixtures/order-invalid.css'],
  });
  const [validResult, invalidResult] = results;
  console.log(invalidResult)

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
