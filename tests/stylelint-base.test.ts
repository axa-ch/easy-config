import stylelint, { type LintResult } from 'stylelint';
import { expect, test } from 'vitest';
import * as api from '../index';

const isLintResultValid = ({ errored, warnings }: LintResult) => errored === false && warnings.length === 0;

test('Stylelint base config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base as string],
    },
    files: ['tests/fixtures/order-valid.css', 'tests/fixtures/order-invalid.css'],
  });
  const [validResult, invalidResult] = results;

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(true);
});
