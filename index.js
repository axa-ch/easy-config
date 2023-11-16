import eslintBase from './eslint/eslint-base.js';
import eslintReact from './eslint/eslint-react.js';
import eslintTypescript from './eslint/eslint-typescript.js';
import prettierBase from './prettier/prettier-base.js';
import stylelintBase from './stylelint/stylelint-base.js';
import stylelintScss from './stylelint/stylelint-scss.js';
import stylelintBemPattern from './stylelint/stylelint-bem-pattern.js';
import stylelintOrder from './stylelint/stylelint-order.js';
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
