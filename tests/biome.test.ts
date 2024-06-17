import { execSync } from 'child_process';
import { expect, test } from 'vitest';

const TEST_REGEX = /(?<line>\d+?):\d+? (?<rule>[/A-z]+)/gs;

const runTest = (file: string): Array<{ line: string; rule: string }> => {
  try {
    execSync(`npx biome check --config-path ./biome.test.json ./tests/fixtures/${file}`, {
      encoding: 'utf-8',
      stdio: 'pipe',
    });
  } catch (e: unknown) {
    // parse failing rules
    if (typeof e?.message === 'string') {
      const failedRules = (e?.message as string).matchAll(TEST_REGEX);
      return Array.of(...failedRules).map((match) => ({
        line: match[1],
        rule: match[2],
      }));
    }
  }
  return [];
};

test('it works', async () => {
  expect(runTest('invalid-ts.ts')).toEqual([
    {
      line: '4',
      rule: 'lint/suspicious/noExplicitAny',
    },
    {
      line: '1',
      rule: 'lint/style/useImportType',
    },
  ]);
});
