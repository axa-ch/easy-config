import { expect, test } from 'vitest';
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { eslint as eslintConfig } from '../index.js';
import fs from 'fs';

const isLintResultValid = ({ errorCount, warningCount }) => errorCount === 0 && warningCount === 0;

test('ESLint Typescript React config', async () => {
  const eslint = new FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [
      ...eslintConfig.base,
      ...eslintConfig.typescript,
      ...eslintConfig.react,
      {
        rules: {
          'import/no-extraneous-dependencies': 'off',
          // Off because eslint doesn't recognize number
          'no-undef': 'off',
        },
        languageOptions: {
          parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
          },
        },
      },
    ],
    ignore: false,
  });

  const [validResult, invalidResult] = await Promise.all([
    eslint.lintText(fs.readFileSync('tests/fixtures/react-valid-ts.tsx', 'utf-8')).then((r) => r[0]),
    eslint.lintText(fs.readFileSync('tests/fixtures/react-invalid-ts.tsx', 'utf-8')).then((r) => r[0]),
  ]);

  expect(isLintResultValid(validResult)).toBe(true);
  expect(isLintResultValid(invalidResult)).toBe(false);
});
