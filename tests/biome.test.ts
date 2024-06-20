import { execa } from 'execa';
import { expect, test } from 'vitest';

const RULE_REGEX = /(?<line>\d+?):\d+? (?<rule>[/A-z0-9]+)/gs;

const runTest = async (file: string): Array<{ lineNumber: string; rule: string }> => {
  try {
    await execa({
      stdio: 'pipe',
      encoding: 'utf8',
      preferLocal: true,
    })`biome check --config-path ./tests/biome.test.json ./tests/fixtures/${file}`;
  } catch (e: unknown) {
    /**
     * Parse failing rules
     * The output of biome typically looks like this:
     * path/to/file lineNumber:column biome/special/rule
     * Biome is currently developing a json reporter: https://biomejs.dev/reference/reporters/#json
     * We could switch to this when it's ready
     */
    if (typeof e?.message === 'string') {
      const failedRules = (e?.message as string).matchAll(RULE_REGEX);
      return Array.from(failedRules, (match) => ({
        lineNumber: match[1],
        rule: match[2],
      }));
    }
  }
  return [];
};

test('invalid ts', async () => {
  expect(await runTest('invalid-ts.ts')).toEqual([
    {
      lineNumber: '2',
      rule: 'lint/style/useNodejsImportProtocol',
    },
    {
      lineNumber: '4',
      rule: 'lint/suspicious/noExplicitAny',
    },
    {
      lineNumber: '8',
      rule: 'lint/complexity/noForEach',
    },
    {
      lineNumber: '10',
      rule: 'lint/suspicious/noConfusingVoidType',
    },
    {
      lineNumber: '1',
      rule: 'lint/style/useImportType',
    },
    {
      lineNumber: '12',
      rule: 'lint/performance/noAccumulatingSpread',
    },
  ]);
});

test('valid ts', async () => {
  expect(await runTest('valid-ts.ts')).toEqual([]);
});

test('valid react', async () => {
  expect(await runTest('react-valid-ts.tsx')).toEqual([]);
});

test('invalid react', async () => {
  expect(await runTest('react-invalid-ts.tsx')).toEqual([
    {
      lineNumber: '19',
      rule: 'lint/a11y/noRedundantAlt',
    },
    {
      lineNumber: '21',
      rule: 'lint/style/useSelfClosingElements',
    },
    {
      lineNumber: '22',
      rule: 'lint/a11y/useButtonType',
    },
  ]);
});
