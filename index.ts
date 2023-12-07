

import eslintBase from './eslint/eslint-base.json';
import eslintTypescript from './eslint/eslint-typescript.json';
import eslintReact from './eslint/eslint-react.json';

import tsConfigBase from './ts-config/base.json';

import prettierBase from './prettier/prettier-base.json';

import stylelintBase from './stylelint/stylelint-base.json';
import stylelintScss from './stylelint/stylelint-scss.json';
import stylelintBemPattern from './stylelint/stylelint-bem-pattern';
import stylelintOrder from './stylelint/stylelint-order.json';

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

// using `export =` syntax here to force typescript to emit `module.exports = `
export = {
  eslint,
  prettier,
  stylelint,
  tsConfig
}