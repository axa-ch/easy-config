import type { Config as PrettierConfig } from 'prettier';
import type { Config as StylelintConfig } from 'stylelint';

export declare const stylelint: {
  base: StylelintConfig;
  scss: StylelintConfig;
  order: StylelintConfig;
};

export declare const prettier: {
  base: PrettierConfig;
};
