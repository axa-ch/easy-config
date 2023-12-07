import { expect, test } from "vitest";
import stylelint from "stylelint";
import { isStyleLintValid, testRequire } from './helper.js';

const stylelintBase = testRequire.resolve("../stylelint/stylelint-base");

test("Stylelint base config", async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: [stylelintBase],
    },
    files: [
      "tests/fixtures/order-valid.css",
      "tests/fixtures/order-invalid.css",
    ],
  });
  const [validResult, invalidResult] = results;

  expect(isStyleLintValid(validResult)).toBe(true);
  expect(isStyleLintValid(invalidResult)).toBe(true);
});
