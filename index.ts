import { makeBase } from './eslint/eslint-base.js';
import { typescript } from './eslint/eslint-typescript.js';
import { react } from './eslint/eslint-react.js';
import tsConfigBase from './ts-config/base.json' assert { type: 'json' };
import prettierBase from './prettier/prettier-base.json' assert { type: 'json' };
import stylelintBase from './stylelint/stylelint-base.json' assert { type: 'json' };
import stylelintScss from './stylelint/stylelint-scss.json' assert { type: 'json' };
import stylelintOrder from './stylelint/stylelint-order.json' assert { type: 'json' };
import stylelintBemPattern from './stylelint/stylelint-bem-pattern.js';

// Eslint rules
const eslint = {
  makeBase,
  typescript,
  react,
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
