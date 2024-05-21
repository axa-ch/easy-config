import { makeBase } from './eslint/eslint-base.js';
import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { typescript } from './eslint/eslint-typescript.js';
import tseslint from 'typescript-eslint';

export default [
  ...makeBase(js.configs.recommended, prettierRecommended),
  ...typescript(tseslint, import.meta.dirname),
  {
    ignores: ['dist/**', 'tests/**', 'prettier.config.js', 'eslint.config.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
