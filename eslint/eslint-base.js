import { makeCompat } from './setup-compat.js';

export const makeBase = (dirname) =>
  makeCompat(dirname).config({
    root: true,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    rules: {
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': ['error', 'unix'],
    },
  });
