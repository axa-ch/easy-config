import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import prettierRecommended from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
});

export default [
  ...compat.extends('airbnb-base'),
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      'eslint-plugin-import': importPlugin,
    },
    rules: {
      // unresolved imports will be caught by our bundlers
      'import/no-unresolved': 'off',
      // file imports will be resolved by bundlers we don't need to check the import extensions
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': ['error', 'unix'],
    },
  },
];
