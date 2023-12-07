import { expect, test } from 'vitest';
import stylelint from 'stylelint';

import { isStyleLintValid, testRequire } from './helper.js';

const stylelintBase = testRequire.resolve("../stylelint/stylelint-base");
const stylelintScss = testRequire.resolve("../stylelint/stylelint-scss");

// we need to have a compiled version of this rule
const bemPattern = testRequire.resolve('../dist/stylelint/stylelint-bem-pattern');

test('Stylelint SCSS BEM pattern config', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [stylelintBase, stylelintScss, bemPattern],
    },
    files: ['tests/fixtures/bem-pattern-valid.scss', 'tests/fixtures/bem-pattern-invalid.scss'],
  });

  const [validResult, invalidResult] = results;
  expect(isStyleLintValid(validResult)).toBe(true);
  expect(isStyleLintValid(invalidResult)).toBe(false);
});
