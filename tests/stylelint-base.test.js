import stylelint from 'stylelint';
import { test, expect } from 'vitest';
import * as api from '../index.js';

const isLintResultValid = ({ warnings, errored }) => !errored && warnings.length === 0;

test('Stylelint base config', async () => {
  const { results } = await stylelint.lint({
    config: api.stylelint.base,
    files: ['tests/fixtures/order-valid.css', 'tests/fixtures/order-invalid.css'],
  });
  const [validResult, invalidResult] = results;

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(true);
});
