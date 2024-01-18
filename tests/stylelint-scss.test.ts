import { expect, test } from 'vitest';
import { isStyleLintValid, testRequire } from './helper.js';
import stylelint from 'stylelint';

const stylelintBase = testRequire.resolve('../stylelint/stylelint-base');
const stylelintScss = testRequire.resolve('../stylelint/stylelint-scss');

test('Stylelint SCSS config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [stylelintBase, stylelintScss],
    },
    files: ['tests/fixtures/valid.scss', 'tests/fixtures/invalid.scss'],
  });
  const [validResult, invalidResult] = results;
  expect(isStyleLintValid(validResult)).toBe(true);
  expect(isStyleLintValid(invalidResult)).toBe(false);
});
