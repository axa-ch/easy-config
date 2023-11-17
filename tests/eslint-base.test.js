import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { expect, test } from 'vitest';
import { eslint as eslintConfig } from '../index.js';

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint JS config', async () => {
  const eslint = new FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [...eslintConfig.base],
    ignore: false,
  });
  const [validResult, invalidResult] = await eslint.lintFiles(['tests/fixtures/valid.js', 'tests/fixtures/invalid.js']);
  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
