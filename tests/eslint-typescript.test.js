import { expect, test } from 'vitest';
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { eslint as eslintConfig } from '../index.js';
import fs from 'fs';

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint JS config', async () => {
  const eslint = new FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [...eslintConfig.base, ...eslintConfig.typescript],
    ignore: false,
  });
  const [validResult, invalidResult] = await Promise.all([
    eslint.lintText(fs.readFileSync('tests/fixtures/valid-ts.ts', 'utf-8')).then((r) => r[0]),
    eslint.lintText(fs.readFileSync('tests/fixtures/invalid-ts.ts', 'utf-8')).then((r) => r[0]),
  ]);

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
