import eslintBase from './eslint/eslint-base.json' assert {type: 'json'};
import eslintTypescript from './eslint/eslint-typescript.json' assert {type: 'json'};
import eslintReact from './eslint/eslint-react.json' assert {type: 'json'};
import tsConfigBase from './ts-config/base.json' assert {type: 'json'};
import prettierBase from './prettier/prettier-base.json' assert {type: 'json'};
import stylelintBase from './stylelint/stylelint-base.json' assert {type: 'json'};
import stylelintScss from './stylelint/stylelint-scss.json' assert {type: 'json'};
import stylelintOrder from './stylelint/stylelint-order.json' assert {type: 'json'};
import stylelintBemPattern from './stylelint/stylelint-bem-pattern';

// Eslint rules
const eslint = {
  base: eslintBase,
  react: eslintReact,
  typescript: eslintTypescript,
};

// Stylelint rules
const prettier = {
  base: prettierBase,
};

// Stylelint rules
const stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  bemPattern: stylelintBemPattern,
  order: stylelintOrder,
};

const tsConfig = {
  base: tsConfigBase,
};

export { eslint, prettier, stylelint, tsConfig };
