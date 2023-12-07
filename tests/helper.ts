import {LintResult} from 'stylelint'
import { createRequire } from "module";

export const isEsLintResultValid = ({ errorCount, warningCount }: {errorCount: number, warningCount: number}) =>
  errorCount === 0 && warningCount === 0;

export const isStyleLintValid = ({ errored, warnings }: LintResult) => errored === false && warnings.length === 0;

export const testRequire = createRequire(import.meta.url)