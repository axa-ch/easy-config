import prettierBase from './prettier/base.js';
import stylelintBase from './stylelint/stylelint-base.js';
import stylelintOrder from './stylelint/stylelint-order.js';
import stylelintScss from './stylelint/stylelint-scss.js';

// Stylelint rules
export const stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  order: stylelintOrder,
};

export const prettier = {
  base: prettierBase,
};
