import stylelintBase from './stylelint/stylelint-base.js';
import stylelintBemPattern from './stylelint/stylelint-bem-pattern.js';
import stylelintOrder from './stylelint/stylelint-order.js';
import stylelintScss from './stylelint/stylelint-scss.js';
import tsConfigBase from './ts-config/base.json' with { type: 'json' };

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
