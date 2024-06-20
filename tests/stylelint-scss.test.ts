import stylelint, { type LintResult } from 'stylelint';
import { expect, test } from 'vitest';
import * as api from '../index';

const isLintResultValid = ({ errored, warnings }: LintResult) => errored === false && warnings.length === 0;

test('Stylelint SCSS config', async () => {
  const { results } = await stylelint.lint({
    config: {
      /* @ts-ignore */
      extends: [api.stylelint.base, api.stylelint.scss],
    },
    files: ['tests/fixtures/valid.scss', 'tests/fixtures/invalid.scss'],
  });
  const [validResult, invalidResult] = results;
  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
