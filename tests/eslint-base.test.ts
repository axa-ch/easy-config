import { expect, test } from "vitest";
import { ESLint } from "eslint";

import { prettier } from "../index";
import { isEsLintResultValid, testRequire } from './helper';

const eslintBase = testRequire.resolve("../eslint/eslint-base.json");


test("ESLint JS config", async () => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [eslintBase],
      rules: {
        "prettier/prettier": ["error", prettier],
      },
    },
  });
  const [validResult, invalidResult] = await eslint.lintFiles([
    "tests/fixtures/valid.js",
    "tests/fixtures/invalid.js",
  ]);

  expect(isEsLintResultValid(validResult)).toBe(true);
  expect(isEsLintResultValid(invalidResult)).toBe(false);
});
