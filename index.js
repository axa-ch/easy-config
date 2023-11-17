import eslintBase from './eslint/eslint-base.js';
import eslintReact from './eslint/eslint-react.js';
import eslintTypescript from './eslint/eslint-typescript.js';
import prettierBase from './prettier/prettier-base.js';
import stylelintBase from './stylelint/stylelint-base.cjs';
import stylelintScss from './stylelint/stylelint-scss.cjs';
import stylelintBemPattern from './stylelint/stylelint-bem-pattern.cjs';
import stylelintOrder from './stylelint/stylelint-order.cjs';
import tsConfigBase from './ts-config/base.json';

// Eslint rules
export const eslint = {
  base: eslintBase,
  react: eslintReact,
  typescript: eslintTypescript,
};

// Stylelint rules
export const prettier = {
  base: prettierBase,
};

// Stylelint rules
export const stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  bemPattern: stylelintBemPattern,
  order: stylelintOrder,
};

export const tsConfig = {
  base: tsConfigBase,
};
