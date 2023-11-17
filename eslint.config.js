import base from './eslint/eslint-base.js';
export default [
  ...base,
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
