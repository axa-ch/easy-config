import { makeCompat } from './setup-compat.js';

export const makeTypescript = (dirname) =>
  makeCompat(dirname).config({
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    overrides: [
      {
        files: ['*.js', '*.cjs'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
  });
