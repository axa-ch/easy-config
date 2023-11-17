import { expect, test } from 'vitest';
import { eslint as eslintConfig } from '../index.js';
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import fs from 'fs';

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint React config', async () => {
  const eslintReact = new FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [
      ...eslintConfig.base,
      ...eslintConfig.react,
      {
        rules: {
          'import/no-extraneous-dependencies': 'off',
        },
      },
    ],
  });

  const [validResult, invalidResult] = await Promise.all([
    eslintReact.lintText(fs.readFileSync('tests/fixtures/react-valid.jsx', 'utf-8')).then((r) => r[0]),
    eslintReact.lintText(fs.readFileSync('tests/fixtures/react-invalid.jsx', 'utf-8')).then((r) => r[0]),
  ]);

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
