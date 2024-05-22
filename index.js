import stylelintBase from './stylelint/stylelint-base';
import stylelintBemPattern from './stylelint/stylelint-bem-pattern';
import stylelintOrder from './stylelint/stylelint-order';
import stylelintScss from './stylelint/stylelint-scss';
import tsConfigBase from './ts-config/base.json';

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
