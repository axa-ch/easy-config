import base from './eslint/eslint-base.js';
import typescript from './eslint/eslint-typescript.js';

export default [
  ...base,
  ...typescript,
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    ignores: ['dist/**', 'tests/fixtures/**'],
  },
];
